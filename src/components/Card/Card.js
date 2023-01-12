import { useNavigate } from 'react-router-dom';

import './Card.css';

function Card({ article, setSelectedArticle }) {
  const navigate = useNavigate();

  const handleSelection = (event) => {
    setSelectedArticle(article);
    navigate(`/article/${article.uri.slice(14)}`)
  }

  let abstract;
  if (window.innerWidth > 800) {
    abstract = article.abstract;
  } else {
    abstract = '';
  }

  return (
    <>
      <article onClick={(event) => handleSelection(event)}>
        <div className='card-image--container'>
          <img className='card-image' src={article.multimedia[0].url} />
        </div>
        <div className='card-text--container'>
          <h3>{article.title}</h3>
          <p>{abstract}</p>
        </div>
      </article>
      <hr />
    </>
  )
}

export default Card;