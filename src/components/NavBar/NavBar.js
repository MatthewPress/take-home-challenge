import './NavBar.css';

function NavBar({ storyTypes, filterArticles }) {
  const filterLinks = storyTypes.map((storyType, index) => {
    return (
      <>
        <a id={storyType} key={index + 1}>{storyType.toUpperCase()}</a>
        <hr />
      </>
    )
  });
  
  return (
    <nav>
      <h2 className='nav-title'>Topics:</h2>
      <ul onClick={(event) => filterArticles(event)}>
        <a id='all' key={0}>ALL</a>
        <hr />
        {filterLinks}
      </ul>
    </nav>
  )
}

export default NavBar;