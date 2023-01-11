import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';

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
      <Routes>
        <Route path='/' element={<p>something</p>} />
      </Routes>
    </>
  );
}

export default App;
