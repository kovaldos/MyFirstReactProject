import React from "react";
import "./_nullstyle.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import Aside from "./components/Asisde";

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
