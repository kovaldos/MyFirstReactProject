import React from "react";
import MyPosts from "./My-posts/MyPosts";
import style from "./Profile.module.sass";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className={style.container}>
			<ProfileInfo />
			<MyPosts />
		</div>
	)
}

export default Profile;