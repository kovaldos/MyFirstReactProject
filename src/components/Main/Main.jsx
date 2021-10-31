import React from "react";
import Profile from "../Profile/Profile";
import MainBg from "./Main-img-bg/MainBg";
import style from "./Main.module.sass"

const Main = () => {
	return (
		<main className={style.main}>
			<div className={style.content}>
				<MainBg />
				<Profile />
			</div>
		</main>
	)
}

export default Main