import React from "react";
import style from "./Post.module.sass";

const Post = (props) => {
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
					<span className={style.textContent}>{props.message}</span>
				</div>
				<div className={style.likeAndShare}>
					<div className={style.likeBlock}>
						<button className={style.like}>{props.like}</button>
						<span className={style.likeQuantity}>{props.likeQuantity}</span>
					</div>
					<div className={style.shareBlock}>
						<button className={style.share}>{props.share}</button>
						<span className={style.shareQuantity}>{props.shareQuantity}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post