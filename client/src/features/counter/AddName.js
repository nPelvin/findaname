import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addName, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function AddName() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("");

	const incrementValue = { name:incrementAmount, gender:"mf" } || "";

	return (
		<div>
			<div className={styles.row}></div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label="Set custom name"
					value={[incrementAmount]}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={() => dispatch(addName(incrementValue))}
				>
					Add Name
				</button>
			</div>
		</div>
	);
}
