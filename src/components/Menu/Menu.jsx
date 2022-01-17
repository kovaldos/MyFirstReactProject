import React from "react";
import style from "./Menu.module.sass";
import {Link} from "react-router-dom";

const Menu = () => {
	return (
		<nav className={style.menu}>
			<ul className={style.list}>
				<li>
					<Link to="/feed" className={style.link}>
						Feed
					</Link>
				</li>
				<li>
					<Link to="/messages" className={style.link}>
						Messages
					</Link>
				</li>
				<li>
					<Link to="/profile" className={style.link}>
						Profile
					</Link>
				</li>
				<li>
					<Link to="/settings" className={style.link}>
						Settings
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu