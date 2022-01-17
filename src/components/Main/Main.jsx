import React from "react";
import MainBg from "./Main-img-bg/MainBg";
import style from "./Main.module.sass"
import Feed from "./Feed/Feed";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import {Routes, Route, Link} from "react-router-dom";





const Main = () => {
    return (
        <main className={style.main}>
            <div className={style.content}>
                <MainBg/>
                <Routes>
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </main>
    )
}

export default Main