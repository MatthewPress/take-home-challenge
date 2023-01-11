import './Card.css';

function Card({ article }) {
  return (
    <article>
      <h3>{article.title}</h3>
    </article>
  )
}

export default Card;