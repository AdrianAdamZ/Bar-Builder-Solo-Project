import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-collapse">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

}