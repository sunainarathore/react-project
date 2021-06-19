import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        {/* Logo */}
        <img className="page-logo" src={logo} alt="the-meme-generator" />

        <h1 className="page-title">The Meme Generator</h1>
      </div>
    </header>
  );
}

export default Header;
