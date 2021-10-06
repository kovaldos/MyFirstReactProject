import React from "react";
import style from "./Post.module.sass";

const Post = () => {
	return (
		<div className={style.Post__container}>
			<div className={style.Post__content}>
				<div className={style.Post__imgBox}>
					<img src="/img/avatar.jpg" alt="User avatar" className={style.Post__Avatar} />
				</div>
				<div className={style.Post__text}>
					<span className={style.Post__textContent}>Hello, React!</span>
				</div>
			</div>
		</div>
	)
}

export default Post