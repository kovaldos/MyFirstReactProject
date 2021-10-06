import React from "react";
import style from "./MainImgBox.module.sass"

const MainImgBox = () => {
	return (
		<div className={style.MainImgBox__imgBox}>
			<img
				className={style.MainImgBox__img}
				src="https://picsum.photos/1920/1080"
				alt="main-background-image"
			/>
		</div>

	)
}

export default MainImgBox