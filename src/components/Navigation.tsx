import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Jake Riggs Productions
        </Link>
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/media" 
              className={location.pathname === '/media' ? 'nav-link active' : 'nav-link'}
            >
              Media
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
