import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const Grandchild = () => {
    const value = useContext(AppContext)

	return (
		<div>
            <h4>Grandchild</h4>
            <p>{ value }</p>
		</div>
	);
};

export default Grandchild;
