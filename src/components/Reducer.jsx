import React, { useReducer } from 'react';
import myReducer, { initialCount } from '../utilities/myReducer';


const Reducer = () => {
    const [count, dispatch] = useReducer(myReducer, initialCount);

	const handleAdd = () => {
		dispatch({
			type: 'add_1',
		});
	};
	const handleMultiple = () => {
		dispatch({
			type: 'multiple_3',
		});
	};
	const handleReset = () => {
		dispatch({
			type: 'reset',
		});
	};

	return (
		<div>
			<h2>UseReducer</h2>
			<p>Count: {count}</p>
			<button onClick={handleAdd}>Add_1</button>
			<button onClick={handleMultiple}>Mul_3</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	);
};

export default Reducer;
