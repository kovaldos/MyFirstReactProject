import React from "react";
import style from "./MainImgBox.module.sass"

const MainImgBox = () => {
	return (
		<div className={style.imgBox}>
			<img
				className={style.img}
				src="https://picsum.photos/1920/1080"
				alt="main-background-image"
			/>
		</div>

	)
}

export default MainImgBox