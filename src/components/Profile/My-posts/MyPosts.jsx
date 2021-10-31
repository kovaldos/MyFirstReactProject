import React from "react";
import style from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={style.container}>
			<Post message="Hi, it's my first post here" />
			<Post message="Hi! I'm nube in React" />
			<Post message="Hi! I think React is cool)" />

		</div>
	)
}

export default MyPosts