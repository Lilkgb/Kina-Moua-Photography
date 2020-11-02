import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return(
    <div className="header">
      <div className="nav">
        <Link>Home</Link>
        <Link>Pricing & Packages</Link>
        <Link>Faq</Link>
        <Link>Contact Me</Link>
      </div>
    </div>
  )
}

export default Header
