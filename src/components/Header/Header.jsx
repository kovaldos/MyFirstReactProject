import React from "react";
import logo from "../../img/logo_transparent.png";
import style from "./Header.module.sass";

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.container}>
				<a href="#" className={style.link}>
					<img className={style.logo} src={logo} alt="logo" />
				</a>
			</div>
		</header>
	)
}

export default Header