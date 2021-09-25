import React from "react";
import logo from "../img/logo_transparent.png";

const Header = () => {
	return (
		<header className="header">
			<a href="#" className="header__logo-link">
				<img className="header__logo" src={logo} alt="logo" />
			</a>
		</header>
	)
}

export default Header