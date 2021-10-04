import React from "react";
import "./App.sass";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";

const App = () => {
   return (
      <div className="app-wrapper">
         <Header />
         <Menu />
         <Main />
         <Aside />
      </div>
   );
};

export default App;
