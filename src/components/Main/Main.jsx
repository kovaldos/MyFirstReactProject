import React from "react";
import style from "./Main.module.sass"

const Main = () => {
	return (
		<main className={style.main}>
			<div className={style.main__content}>
				<div className={style.main__imgBox}>
					<img
						className={style.main__img}
						src="https://picsum.photos/1920/1080"
						alt="main-background-image"
					/>
				</div>
			</div>

		</main>
	)
}

export default Main