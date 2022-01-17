import React from "react";
import Profile from "../Profile/Profile";
import MainBg from "./Main-img-bg/MainBg";
import style from "./Main.module.sass"
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.content}>
                <MainBg/>
                <Routes>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/messages" component={Dialogs}/>
                </Routes>
            </div>
        </main>
    )
}

export default Main