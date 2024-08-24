import React, { useState } from 'react';

const Basic3 = () => {
    const [products, setProducts] = useState([])
    const handleClick = () => {
        setProducts([...products, {
            id: products.length,
            name: "Hello React",
        }])
    }

    return (
        <div>
            <button onClick={handleClick}>Add a new product</button>
            <ul>
                {products.map(p => (
                    <li key={p.id}>id: { p.id } / name: { p.name }</li>
                ))}
            </ul>
        </div>
    );
};

export default Basic3;
