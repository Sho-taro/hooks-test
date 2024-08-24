import React, { useState, useEffect } from 'react';

const Basic4 = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(prev => prev+1)
    }
    useEffect(() => {
        console.log("useEffect invoked!")   // レンダリングが起こるたびに実行される
    })


    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>{ count }</p>
        </div>
    );
};

export default Basic4;
