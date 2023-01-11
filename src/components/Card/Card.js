import { useNavigate } from 'react-router-dom';

import './Card.css';

function Card({ article, setSelectedArticle }) {
  const navigate = useNavigate();

  const handleSelection = (event) => {
    setSelectedArticle(article);
    navigate(`/${article.uri.slice(14)}`)
  }

  return (
    <article onClick={(event) => handleSelection(event)}>
      <h3>{article.title}</h3>
    </article>
  )
}

export default Card;