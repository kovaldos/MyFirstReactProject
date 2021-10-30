import React from "react";
import style from "./Post.module.sass";

const Post = () => {
	return (
		<div className={style.container}>
			<div className={style.content}>
				<div className={style.avatarBox}>
					<div className={style.imgBox}>
						<img
						src="https://picsum.photos/100" alt="User avatar" className={style.avatar} />
					</div>
					</div>	
				<div className={style.textBlock}>
					<span className={style.textContent}>Hello, React!</span>
				</div>
			</div>
		</div>
	)
}

export default Post