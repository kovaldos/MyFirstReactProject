import React from "react";
import "./Menu.css";

const Menu = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<li>
					<a href="#" className="menu__link">
						Feed
					</a>
				</li>
				<li>
					<a href="#" className="menu__link">
						Music
					</a>
				</li>
				<li>
					<a href="#" className="menu__link">
						Messages
					</a>
				</li>
				<li>
					<a href="#" className="menu__link">
						Profile
					</a>
				</li>
				<li>
					<a href="#" className="menu__link">
						Settings
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Menu