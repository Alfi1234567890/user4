import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f8f9fa' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/employee-form" style={{ margin: '0 10px' }}>Employee Form</Link>
    </nav>
  );
};

export default Navbar;
