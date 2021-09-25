import React from "react";
import "./_nullstyle.css";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

const App = () => {
   return (
      <div className="app-wrapper">
         <Header />
         <Menu />
         <Main />
      </div>
   );
};

export default App;
