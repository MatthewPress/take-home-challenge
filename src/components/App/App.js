import { useEffect, useState } from 'react';
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
   <p>Hey</p>
  );
}

export default App;
