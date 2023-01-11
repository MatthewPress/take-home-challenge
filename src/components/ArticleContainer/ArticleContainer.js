import Card from '../Card/Card';

import './ArticleContainer.css';

function ArticleContainer({ articles, setSelectedArticle }) {
  const cards = articles?.map((article, index) => {
    return <Card key={index} article={article} setSelectedArticle={setSelectedArticle} />
  });

  return (
    <section>
      {cards}
    </section>
  )
}

export default ArticleContainer;