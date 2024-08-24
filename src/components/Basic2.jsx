import React, { useState } from 'react';

const Basic2 = () => {
    const [product, setProduct] = useState({ name: '', price: 0 })
    const nameChangeHandler = (e) => {
        setProduct({
            ...product,
            name: e.target.value,
        })
    }
    const priceChangeHandler = e => {
		setProduct({
			...product,
			price: e.target.value,
		});
	};

    return (
		<>
			<form>
				<input type="text" value={product.name} onChange={nameChangeHandler} />
				<input type="number" value={product.price} onChange={priceChangeHandler} />
			</form>
			<p>name: {product.name}</p>
			<p>price: {product.price}</p>
		</>
	);
};

export default Basic2;
