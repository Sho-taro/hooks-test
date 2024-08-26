import React, {memo} from 'react';

const CountBtn = ({ handleClick, children }) => {
    console.log('clicked', children)
	return (
		<div>
			<h3>CountBtn</h3>
			<button onClick={handleClick}>{children}</button>
		</div>
	);
};

export default memo(CountBtn);   // CountBtnに渡されたPropsが同じだったら再レンダしない
