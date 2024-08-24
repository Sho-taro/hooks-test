import React, { useState } from 'react';

const Basic1 = ({ name }) => {
    const [count, setCount] = useState(0)
    const clickHandler = () => {
        // console.log('clicked')
        // setCount(count+1)
        setCount(prev => prev + 1);   // prevはcountの更新前の値
		setCount(prev => prev + 1);
    }

    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={clickHandler}>+1</button>
            <p>{ count }</p>
        </>
    );
};

export default Basic1;
