import React from "react";
import style from "./Main.module.sass"

const Main = () => {
	return (
		<main className="main">
			<div className="main__img-box">
				<img
					className="main__img"
					src="https://picsum.photos/1920/1080"
					alt="main-background-image"
				/>
			</div>
		</main>
	)
}

export default Main