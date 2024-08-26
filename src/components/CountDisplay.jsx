import React, {memo} from 'react';

const CountDisplay = ({ name, value }) => {
    console.log(name)

	return (
		<div>
			<h3>CountDisplay</h3>
			<p>{value}</p>
		</div>
	);
};

export default memo(CountDisplay);   // CountDisplayに渡されたPropsが同じだったら再レンダしない