import React from "react";
import style from "./Menu.module.sass";

const Menu = () => {
	return (
		<nav className={style.menu}>
			<ul className={style.list}>
				<li>
					<a href="#" className={style.link}>
						Feed
					</a>
				</li>
				<li>
					<a href="#" className={style.link}>
						Music
					</a>
				</li>
				<li>
					<a href="#" className={style.link}>
						Messages
					</a>
				</li>
				<li>
					<a href="#" className={style.link}>
						Profile
					</a>
				</li>
				<li>
					<a href="#" className={style.link}>
						Settings
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Menu