import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function index() {
  return (
    <nav className="navbar nav navbar-expand-lg navbar-light bg-light wrapper pt-3 pb-3">
      <Link className="nav__nav-logo" to="/">
        xShare
      </Link>
    </nav>
  );
}
