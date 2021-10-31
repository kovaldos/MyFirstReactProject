import React from "react";
import MyPosts from "./My-posts/MyPosts";
import style from "./Profile.module.sass";

const Profile = () => {
	return (
		<div className={style.container}>
			<MyPosts />
		</div>
	)
}

export default Profile;