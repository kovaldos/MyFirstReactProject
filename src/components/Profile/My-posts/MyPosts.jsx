import React from "react";
import style from "./MyPosts.module.sass";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={style.container}>
			<Post message="Hi, it's my first post here" like="like" likeQuantity="15" share="share" shareQuantity="3" />
			<Post message="Hi! I'm nube in React" like="like" likeQuantity="10" share="share" shareQuantity="4" />
			<Post message="Hi! I think React is cool)" like="like" likeQuantity="5" share="share" shareQuantity="2" />

		</div>
	)
}

export default MyPosts