import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Menu/>
                <Main/>
                <Aside/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;


