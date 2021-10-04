import React from "react";
import style from "./MyPosts.module.sass";

const MyPosts = () => {
	return (
		<div className={style.container}>
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default MyPosts