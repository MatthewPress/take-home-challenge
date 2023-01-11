import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import ArticlePage from '../ArticlePage/ArticlePage';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    getData('home')
      .then(data => {
        setArticles(data.results)
      })
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ArticleContainer articles={articles} setSelectedArticle={setSelectedArticle} />} />
          <Route path='/:uri' element={<ArticlePage selectedArticle={selectedArticle} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
