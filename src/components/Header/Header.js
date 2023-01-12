import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header>
      <Link to='/' style={{ textDecoration: "none" }}>
        <h1>Yeet Times</h1>
      </Link>
      <div className='line first-line'></div>
      <div className='line second-line'></div>
    </header>
  )
}

export default Header;