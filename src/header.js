import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Header() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <nav>
        <div className="text">
          <h1>DrapeFit</h1>
        </div>

        <ul className="nav-links">

          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search your style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <ul className="nav-links">
            <li><a onClick={() => navigate('/')} className="nav-link">Home</a></li>

            <li className="dropdown">
              <a href="#">UpperLine</a>
              <ul className="dropdown-menu">
                <li><a onClick={() => navigate('/shirt')}>Shirt</a></li>
                <li><a onClick={() => navigate('/T-shirt')}>T-Shirt</a></li>
                <li><a onClick={() => navigate('/jacket')}>Jackets</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a href="#">LowerLine</a>
              <ul className="dropdown-menu">
                <li><a onClick={() => navigate('/jeans')}>Jeans</a></li>
                <li><a onClick={() => navigate('/cargo')}>Cargo</a></li>
                <li><a onClick={() => navigate('/linenpant')}>Linen Pants</a></li>
              </ul>
            </li>

            <div className="nav-icons">
              <a onClick={() => navigate('/wishlist')} className="nav-btn" title="Favorites">💗</a>
              <a onClick={() => navigate('/cart')} className="nav-btn" title="Cart">&#128722;</a>
              <button onClick={toggleTheme} className="nav-btn" title="Toggle Theme">
                {theme === 'light' ? '🌛' : '🌞'}
              </button>
              <a id="filter-toggle" className="nav-btn" title="Filters">
                <i className="fas fa-filter"></i>
              </a>
              <a onClick={() => navigate('/loginPage')} className="nav-btn" title="Login">
                <i className="fas fa-user"></i>
              </a>
            </div>
          </ul>
        </ul>
      </nav>
    </>
  );
}


export function Footer() {

    return (
        
        <>
        
        
          <footer className="footer">
              <p>&copy; 2025 <strong>DrapeFit</strong>. All rights reserved.</p>
          </footer>
        
        </>
    );
    }