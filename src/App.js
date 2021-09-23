import React from "react";
import "./App.css";
import logo from "./img/logo.jpeg"

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img className="header__logo" src= {logo} alt="logo" />
      </header>
      <nav className="menu">
        <ul className="menu__list">
          <li>
            <a href="#" className="menu__link">News</a>
          </li>
          <li>
            <a href="#" className="menu__link">Feed</a>
          </li>
          <li>
            <a href="#" className="menu__link">Messages</a>
          </li>
          <li>
            <a href="#" className="menu__link">Profile</a>
          </li>
          <li>
            <a href="#" className="menu__link">Settings</a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <div className="main__img-box">
          <img src="https://picsum.photos/1920/1080" alt="main-background-image" className="main__img" />
        </div>
      </main>
    </div>
  );
};

export default App;
