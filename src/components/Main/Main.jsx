import React from "react";
import Profile from "../Profile/Profile";
import MainImgBox from "./Main-img-bg/MainImgBox";
import style from "./Main.module.sass"

const Main = () => {
	return (
		<main className={style.main}>
			<div className={style.content}>
				<MainImgBox />
				<Profile />
			</div>
		</main>
	)
}

export default Main