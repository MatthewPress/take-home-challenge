import './ArticlePage.css';

function ArticlePage({ selectedArticle }) {
  return (
    <section>
      <h3>{selectedArticle.title}</h3>
    </section>
  )
}

export default ArticlePage;