import React, { useState, useEffect } from 'react';

const Basic4 = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')

    const handleClick = () => {
        setCount(prev => prev+1)
    }
    const handleChange = (e) => {
        setItem(e.target.value)
    }

    useEffect(() => {
        console.log("Page loaded")  // 最初にページがロードされたときの1回のみ実行される
    }, [])
    useEffect(() => {
        console.log("countが変更されました")  // count変数が変更されたときのみ実行される
    }, [count])
    useEffect(() => {
        console.log("useEffect invoked!")   // レンダリングが起こるたびに実行される
    })


    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>{count}</p>

            <input type="text" value={item} onChange={handleChange} />
            <p>{item}</p>
        </div>
    );
};

export default Basic4;
