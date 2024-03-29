import { Link } from 'react-router-dom';

import { formatDate } from '../../utilities/utilities';

import './ArticlePage.css';

function ArticlePage({ selectedArticle }) {

  const returnedDate = formatDate(selectedArticle.published_date, "MMMM D, YYYY");

  return (
    <section className='article--container'>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <h2 className='article-title'>{selectedArticle.title}</h2>
      <img className='article-image' src={selectedArticle.multimedia[0].url} alt={selectedArticle.multimedia[0].caption} />
      <p className='article-text' >{selectedArticle.byline}</p>
      <p className='article-text' >{returnedDate}</p>
      <p className='article-text' >Abstract: {selectedArticle.abstract}</p>
    </section>
  )
}

export default ArticlePage;