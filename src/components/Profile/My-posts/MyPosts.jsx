import React from "react";
import style from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={style.MyPosts__container}>
			<Post />
		</div>
	)
}

export default MyPosts