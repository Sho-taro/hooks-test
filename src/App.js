import logo from './logo.svg';
import './App.css';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import Basic3 from './components/Basic3';
// import Basic4 from './components/Basic4';
// import TimerContainer from './components/TimerContainer';
// import Fetch from './components/api/Fetch';
import AppContext from './contexts/AppContext';
// import Child from './components/Child';
// import Reducer from './components/Reducer';
// import UseMemo from './components/UseMemo';
import CountDisplay from './components/CountDisplay';
import CountBtn from './components/CountBtn';
import { useState, useCallback } from 'react';

function App() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	// useCallbackを使用しない場合、再レンダのたびに関数が定義し直される
	const addCount1 = useCallback(() => {
		setCount1(prev => prev + 1);
	}, []);
	const addCount2 = useCallback(() => {
		setCount2(prev => prev + 1);
	}, []);

	return (
		<AppContext.Provider value={'value from App.js'}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					{/* <Basic1 name="Sho" />
					<Basic1 name="Taro" /> */}
					{/* <Basic2 /> */}
					{/* <Basic3 /> */}
					{/* <Basic4 /> */}
					{/* <TimerContainer /> */}
					{/* <Fetch /> */}
					{/* <Child /> */}
					{/* <Reducer /> */}
					{/* <UseMemo /> */}
					<CountDisplay name="count1" value={count1} />
					<CountBtn handleClick={addCount1}>addCount1</CountBtn>
					<CountDisplay name="count2" value={count2} />
					<CountBtn handleClick={addCount2}>addCount2</CountBtn>
				</header>
			</div>
		</AppContext.Provider>
	);
}

export default App;
