import React from 'react';
import AppContext from '../AppContext';

const AppProvider = ({ value }) => {
	return (
		<div>
            <AppContext.Provider value={value}>
                { children }
            </AppContext.Provider>
		</div>
	);
};

export default AppProvider;
