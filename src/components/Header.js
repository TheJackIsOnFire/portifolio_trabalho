import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/components/header.css';

class Header extends React.Component {
  render() {
    return (
    <header className="header">
      <nav className="header-nav">
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink to="/about" activeClassName="selected">Sobre Mim</NavLink>
        <NavLink to="/formacao" activeClassName="selected">Formação</NavLink>
        <NavLink to="/portfolio" activeClassName="selected">Portfólio</NavLink>
        <NavLink to="/contato" activeClassName="selected">Contato</NavLink>
      </nav>
    </header>
    )
  }
}

export default Header
