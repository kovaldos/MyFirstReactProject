import React from "react";
import logo from "../../img/logo_transparent.png";
import style from "./Footer.module.sass";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<a href="#" className={style.link}>
					<img className={style.logo} src={logo} alt="logo" />
				</a>
			</div>
		</footer>
	)
}

export default Footer