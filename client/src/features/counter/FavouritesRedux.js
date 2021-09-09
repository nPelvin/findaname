import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function FavouritesRedux() {
	const count = useSelector(selectCount);

	return (
		<div>
			<div className={styles.row}>
				<span className={styles.value}>
					{count.map((x, index) => (
						<div key={index}>{x.name}</div>
					))}
				</span>
			</div>
		</div>
	);
}
