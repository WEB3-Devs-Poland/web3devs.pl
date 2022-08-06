/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { compareDesc } from 'date-fns';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';

import useLocale from '../../translations/hooks';
import { getArticle, getArticles } from '../../utilities/getArticles';
import { MetaDataType, parseMetaDataFromArticle } from '../../utilities/parseMetaDataFromArticle';
import { SinglePost } from './components/SinglePost';

const swiatWeb3BlogPosts = [ {
  title: 'Polygon', date: '2022-08-04T17:35:03.794Z', path: 'https://swiatweb3.substack.com/p/polygon', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Dlaczego sieci Layer2 są konkurencją dla Layer1?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Dogecoin', date: '2022-07-28T17:00:58.630Z', path: 'https://swiatweb3.substack.com/p/dogecoin', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'A co jakby z mema zrobić kryptowalutę?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Decentraland', date: '2022-07-21T17:00:15.497Z', path: 'https://swiatweb3.substack.com/p/decentraland', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Czy metaverse Decentraland opanuje całe web3?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Bezpieczeństwo w Web3', date: '2022-07-15T10:25:00.310Z', path: 'https://swiatweb3.substack.com/p/bezpieczenstwo-w-web3', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Czy blockchain jest wystarczająco bezpieczny?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'AAVE', date: '2022-07-07T17:00:10.286Z', path: 'https://swiatweb3.substack.com/p/aave', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Dlaczego protokoły DeFi to koszmar bankierów?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Audius', date: '2022-06-30T17:00:14.124Z', path: 'https://swiatweb3.substack.com/p/audius', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'A gdyby tak zdecentralizować platformy streamingowe?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'NBA Top Shot', date: '2022-06-23T17:00:20.022Z', path: 'https://swiatweb3.substack.com/p/nba-top-shot', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Projekt NFT za 3 punkty?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: "Stellar - następca SWIFT'u czy tylko kopia XRP?", date: '2022-06-16T17:00:23.866Z', path: 'https://swiatweb3.substack.com/p/stellar-nastepca-swiftu-czy-tylko', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Witaj w trzeciej odsłonie newslettera Świat Web3, w którym dwójka pasjonatów stara się rozwikłać zagadki technologii blockchain, metaverse, DeFi oraz…', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Algorand - czy Blockchain Trillema naprawdę istnieje?', date: '2022-06-06T18:23:34.663Z', path: 'https://swiatweb3.substack.com/p/algorand-czy-blockchain-trillema', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Witaj w drugiej odsłonie newslettera Świat Web3, w którym dwójka pasjonatów stara się rozwikłać zagadki technologii blockchain, metaverse, DeFi oraz…', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Quantstamp - audyt i bezpieczeństwo w Web 3.0', date: '2022-05-16T23:03:10.534Z', path: 'https://swiatweb3.substack.com/p/quantstamp-audyt-i-bezpieczenstwo', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'Czy samo bezpieczeństwo blockchainów wystarczy?', category: 'Article', tags: [ 'Świat Web 3' ],
}, {
  title: 'Coming soon', date: '2022-04-14T16:49:16.212Z', path: 'https://swiatweb3.substack.com/p/coming-soon', author: 'Świat Web3', authorLink: 'https://swiatweb3.substack.com/', summary: 'This is Świat Web3, a newsletter about Merytoryczna analiza technologii blockchain, NFT, metaverse i DeFi..', category: 'Article', tags: [ 'Świat Web 3' ],
} ];

export const BlogPage = () => {
  const navigate = useNavigate();
  const locale = useLocale();

  const [ listOfArticles, setListOfArticles ] = useState<MetaDataType[]>(swiatWeb3BlogPosts);

  useEffect(() => {
    getArticles()
      .map((file) => getArticle(file).then((res) => parseMetaDataFromArticle(res)))
      .forEach((item) => item.then((article) => setListOfArticles((prevState) => [ ...prevState, article ])));
  }, []);

  return (
    <Routes>
      <Route path=":postId" element={<SinglePost />} />

      <Route
        index
        element={(
          <>
            <div className="my-8">
              <BackButton />
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 text-left">
              {listOfArticles
                .sort((article1, article2) => compareDesc(new Date(article1.date), new Date(article2.date)))
                .map((article) => (
                  <div
                    className="flex flex-col p-4 cursor-pointer shadow-sm shadow-gray-300"
                    onClick={() => ((article.path.includes('https://')) ? window.open(article.path, '_blank') : navigate(`/blog/${article.path}`))}
                    key={article.path}
                  >
                    <div className="flex flex-col">
                      <a className="text-md text-purple-600 font-semibold" target="_blank" rel="noreferrer" href={article.authorLink}>{article.author}</a>
                      <span className="text-sm text-gray-400 mb-1">{new Date(article.date).toLocaleDateString(locale.locale, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <h2 className="font-bold text-xl">{article.title}</h2>
                    </div>

                    <div className="text-sm text-gray-500 mt-4 mb-4">
                      {article.summary}
                    </div>

                    <a
                      href={(article.path.includes('https://')) ? article.path : `/blog/${article.path}`}
                      target={(article.path.includes('https://')) ? 'blank' : ''}
                      className="cursor-pointer text-purple-600 font-bold mt-auto"
                    >
                      Read
                      {' '}
                      {'->'}
                    </a>
                  </div>
                ))}
            </div>
          </>
        )}
      />
    </Routes>
  );
};
