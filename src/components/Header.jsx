import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="/">Authors Haven</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
