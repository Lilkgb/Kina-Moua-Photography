import React from 'react';
import { NavLink, withRouter  } from 'react-router-dom';
function Header(){

  return(
    <div className="header">
      <div className="nav">
        <NavLink exact to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/pricing&packages' activeClassName="active">Pricing & Packages</NavLink>
        <NavLink to='/faq' activeClassName="active">Faq</NavLink>
        <NavLink to='/contactMe' activeClassName="active">Contact Me</NavLink>
      </div>
    </div>
  )
}

export default withRouter(Header);
