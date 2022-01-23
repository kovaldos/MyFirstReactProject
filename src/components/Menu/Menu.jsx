import React from "react";
import style from "./Menu.module.sass";
import {NavLink} from "react-router-dom";

const setActiveLink = ({isActive}) => isActive ? style.linkActive : style.link;

const Menu = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.list}>
                <li>
                    <NavLink to="/feed" className={setActiveLink}>Feed</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className={setActiveLink}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={setActiveLink}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={setActiveLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu