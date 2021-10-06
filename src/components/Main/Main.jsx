import React from "react";
import Profile from "../Profile/Profile";
import MainImgBox from "./Main-img-bg/MainImgBox";
import style from "./Main.module.sass"

const Main = () => {
	return (
		<main className={style.Main}>
			<div className={style.Main__content}>
				<MainImgBox />
				<Profile />
			</div>
		</main>
	)
}

export default Main