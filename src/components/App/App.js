import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import ArticlePage from '../ArticlePage/ArticlePage';

import { getData } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [storyTypes, setStoryTypes] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});

  useEffect(() => {
    getData('topstories', 'home', '')
      .then(data => {
        setArticles(data.results);
        
        const subSections = [];
        data.results?.forEach(result => {
          if (!subSections.includes(result.subsection) && result.subsection) {
            subSections.push(result.subsection);
          }
        setStoryTypes(subSections);
        })
      })
  }, []);

  const navigate = useNavigate();

  const filterArticles = (event) => {
    const selectedTopic = event.target.id;

    if (selectedTopic === 'all') {
      setFilteredArticles([]);
      navigate(`/`);
    } else {
      const selectedArticles = articles.filter(article => article.subsection === selectedTopic);
      setFilteredArticles(selectedArticles);
      navigate(`/${selectedTopic}`);
    }
  }

  return (
    <>
      <Header />
        <Routes>
          <Route 
            path='/' 
            element={
              <main>
                <NavBar storyTypes={storyTypes} filterArticles={filterArticles} />
                <ArticleContainer articles={articles} setSelectedArticle={setSelectedArticle} />
              </main>
            } 
          />
          <Route
            path='/:topic'
            element={
              <main>
                <NavBar storyTypes={storyTypes} filterArticles={filterArticles} />
                <ArticleContainer articles={filteredArticles} setSelectedArticle={setSelectedArticle} />
              </main>
            }
          />
          <Route 
            path='/article/:uri' 
            element={
              <main>
                <ArticlePage selectedArticle={selectedArticle} />
              </main>
            } 
          />
        </Routes>
    </>
  );
}

export default App;
