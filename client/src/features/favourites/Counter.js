import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, selectCount } from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("");
  const incrementValue = incrementAmount || "";

  return (
		<div>
			<div className={styles.row}>
				<span className={styles.value}>{count.map((x, index)=><div key={index}>{x}</div>)}</span>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label="Set increment amount"
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
