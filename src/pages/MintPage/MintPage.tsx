import { ethers } from 'ethers';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { useAccount, useConnect, useContract, useSigner } from 'wagmi';

import ErrorMessage from 'components/ErrorMessage';
import WalletConnectBtn from 'components/WalletConnectBtn';
import { isString } from 'utilities/typeGuards';

import EarlyAdoptersNFTAbi from './EarlyAdoptersNFT.json';
import * as S from './MintPage.styles';

/*
 * @todo Add correct contarct address
 */
const contractAddress = '0xc23e9bb6972fE8163AF94F4Ff27fBc87B5b0C49a';
const PRIV_KEY = process.env.SIGNING_WALLET;

interface ContractMessageElements {
  recipient: string;
  nftCopiesNumber: number;
  imgHash: string;
}

const signMessageForContract = async (messageElements: ContractMessageElements) => {
  try {
    if (!PRIV_KEY) throw new Error('Something went wrong');
    const wallet = new ethers.Wallet(PRIV_KEY);
    const { imgHash, nftCopiesNumber, recipient } = messageElements;
    const message = `${recipient};${imgHash[0]};${nftCopiesNumber}`;
    const sig = await wallet.signMessage(message);

    return {
      message,
      sig,
    };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const MintPage = () => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [nftCopiesNumber, setNftCopiesNumber] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const { error: connectError } = useConnect();
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();
  const { data: recipient } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: EarlyAdoptersNFTAbi,
    signerOrProvider: recipient,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      setNftCopiesNumber(+event.target.value);
    }
  };

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

      const { message, sig, error } = await signMessageForContract({
        imgHash: imgHashes[0],
        nftCopiesNumber,
        recipient: recipientAddress,
      });

      if (error) {
        throw error;
      }

      setIsMinting(true);
      await contract.multiMint(recipientAddress, imgHashes, nftCopiesNumber, message, sig);
    } catch (error) {
      setIsMinting(false);
      if (error instanceof Error) {
        setError(error);
      }
    }
  }

  return (
    <S.Content>
      <h1>{t('mintPage.heading')}</h1>
      <S.StyledConnectionStatus address={address} isConnected={isConnected} />
      {!isConnected && (
        <>
          <p>{t('mintPage.connectRemark')}</p>
          <WalletConnectBtn />
        </>
      )}
      {isConnected && (
        <>
          <p>{t('mintPage.instruction')}</p>
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
          <S.Button disabled={isMinting} onClick={handleMint}>
            {t('mintPage.mintButton')}
          </S.Button>
        </>
      )}
      {error && <ErrorMessage message={error.message} />}
    </S.Content>
  );
};

export default MintPage;
