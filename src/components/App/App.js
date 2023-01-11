import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import ArticleContainer from '../ArticleContainer/ArticleContainer';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

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
          <Route path='/' element={<ArticleContainer />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
