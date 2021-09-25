import React from "react";
import logo from "../img/logo_transparent.png";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<a href="#" className="header__logo-link">
					<img className="header__logo" src={logo} alt="logo" />
				</a>
			</div>
		</header>
	)
}

export default Header