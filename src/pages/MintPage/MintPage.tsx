import { ethers } from 'ethers';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { useAccount, useConnect, useContract, useSigner } from 'wagmi';

import ErrorMessage from 'components/ErrorMessage';
import Layout from 'components/Layout';
import { isString } from 'utilities/typeGuards';

import EarlyAdoptersNFTAbi from './EarlyAdoptersNFT.json';
import * as S from './MintPage.styles';
import Header from './components/Header';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

/*
 * @todo Add correct contarct address
 */
const contractAddress = '0xFd67d71A33FB2B2904B1762fed9C63b9A15f17C6';
const PRIV_KEY = '';

const signMessageForContract = async (hashedMessage: string) => {
  try {
    if (!PRIV_KEY) throw new Error('Something went wrong');
    const wallet = new ethers.Wallet(PRIV_KEY);
    const sig = await wallet.signMessage(hashedMessage);

    return {
      sig,
    };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const MintPage = () => {
  const { currentTheme, changeTheme } = useContext(ThemeStateContext) as ThemeStateContextType;
  const [error, setError] = useState<Error | undefined>(undefined);
  const [nftCopiesNumber, setNftCopiesNumber] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const { error: connectError } = useConnect();
  const { t } = useTranslation();
  const { isConnected } = useAccount();
  const { data: recipient } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: EarlyAdoptersNFTAbi,
    signerOrProvider: recipient,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setNftCopiesNumber(parseInt(event.target.value));
    }
  };

  useEffect(() => {
    if (currentTheme === 'light') {
      changeTheme();
    }
  }, []);

  useEffect(() => {
    if (connectError) {
      setError(connectError);
    }
  }, [connectError]);

  async function handleMint() {
    try {
      const recipientAddress = await recipient?.getAddress();
      /* @todo get correct img hashes */
      const imgHashes = ['QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi'];
      if (!isString(recipientAddress)) throw new Error('Something went wrong no Recipient address');
      const hashedMessage = await contract.getMessageHash(
        recipientAddress,
        nftCopiesNumber,
        imgHashes[0]
      );
      const { sig, error } = await signMessageForContract(hashedMessage);
      console.log(`DEBUG ~ handleMint ~ sig`, sig);

      if (error) {
        throw error;
      }

      setIsMinting(true);
      await contract.multiMint(recipientAddress, imgHashes, nftCopiesNumber, hashedMessage, sig);
    } catch (error) {
      setIsMinting(false);
      if (error instanceof Error) {
        setError(error);
      }
    }
  }

  return (
    <Layout>
      <Header />
      <S.Content>
        <h1>
          <S.Name>{t('mintPage.name')}</S.Name> {t('mintPage.heading')}
        </h1>
        <>
          {!isConnected && <p>{t('mintPage.connectRemark')}</p>}
          {isConnected && <p>{t('mintPage.instruction')}</p>}
          {false && (
            <S.InputContainer>
              <label htmlFor="nftCopies">{t('mintPage.nftCopies')}</label>
              <S.CircleButton
                disabled={nftCopiesNumber === 1}
                type="button"
                onClick={() => {
                  setNftCopiesNumber((prev) => prev - 1);
                }}
              >
                <RiSubtractLine />
              </S.CircleButton>
              <S.Input
                id="nftCopies"
                name="nftCopies"
                title="Number of NFT to mint"
                inputMode="numeric"
                min="1"
                type="text"
                onChange={handleInputChange}
                value={nftCopiesNumber}
              />
              <S.CircleButton
                type="button"
                onClick={() => {
                  setNftCopiesNumber((prev) => prev + 1);
                }}
              >
                <RiAddLine />
              </S.CircleButton>
            </S.InputContainer>
          )}
          <S.Button disabled={isMinting || !isConnected} onClick={handleMint}>
            {t('mintPage.mintButton')}
          </S.Button>
        </>
        {error && <ErrorMessage message={error.message} />}
      </S.Content>
    </Layout>
  );
};

export default MintPage;
