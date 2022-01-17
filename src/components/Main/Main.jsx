import React from "react";
import Profile from "./Profile/Profile";
import MainBg from "./Main-img-bg/MainBg";
import style from "./Main.module.sass"
import Dialogs from "./Dialogs/Dialogs";
import {Routes, Route, Link} from "react-router-dom";


const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.content}>
                <MainBg/>
                <Routes>
                    <Route path="/feed" element={<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/messages" element={<Dialogs/>}/>
                    <Route path="/messages" element={<Dialogs/>}/>
                </Routes>
            </div>
        </main>
    )
}

export default Main