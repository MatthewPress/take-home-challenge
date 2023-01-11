import Card from '../Card/Card';

import './ArticleContainer.css';

function ArticleContainer({ articles }) {
  const cards = articles?.map((article, index) => {
    return <Card article={article} />
  });

  return (
    <section>
      {cards}
    </section>
  )
}

export default ArticleContainer;