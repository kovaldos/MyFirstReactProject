import React from "react";
import style from "./Menu.module.sass";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={style.menu}>
            <ul className={style.list}>
                <li>
                    <NavLink to="/feed" className={(navData) => navData.isActive ? style.active : style.link}>
                        Feed
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className={(navData) => navData.isActive ? style.active : style.link}>Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={(navData) => navData.isActive ? style.active : style.link}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={(navData) => navData.isActive ? style.active : style.link}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu