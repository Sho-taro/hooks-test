import React, { useState } from 'react';
import ThemeContext from '../ThemeContext';
import UserContext from '../UserContext';

// 複数のProviderを使用する際は、下記のMyProvidersのようにコンポーネントに切り出した方が可読性が上がる
const MyProviders = ({ value, children }) => {
	const [user, setUser] = useState(null)

	return (
		<div>
			<ThemeContext.Provider value={value}>
				<UserContext.Provider value={{
					user,
					setUser,
				}}>
					{children}
				</UserContext.Provider>
			</ThemeContext.Provider>
		</div>
	);
};

export default MyProviders;
