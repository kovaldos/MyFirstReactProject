import React from "react";
import Item from "./Aside-item/Item";
import style from "./Aside.module.sass";

const Aside = () => {
	return (
		<aside className={style.aside}>
			<Item />
			<Item />
			<Item />
		</aside>
	)
}

export default Aside