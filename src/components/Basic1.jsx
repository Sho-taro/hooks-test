import React from 'react';

const Basic1 = ({ name }) => {
    const clickHandler = () => {
        console.log('clicked')
    }

    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={clickHandler}>Click me</button>
        </>
    );
};

export default Basic1;
