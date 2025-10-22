import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <h2>DEV@Deakin</h2>
      <input type="text" placeholder="Search..." />
      <div className="nav-buttons">
        <a href="#post">Post</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
}

export default Navigation;
