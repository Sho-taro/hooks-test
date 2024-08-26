import logo from './logo.svg';
import './App.css';
// import Basic1 from './components/Basic1';
// import Basic2 from './components/Basic2';
// import Basic3 from './components/Basic3';
// import Basic4 from './components/Basic4';
// import TimerContainer from './components/TimerContainer';
// import Fetch from './components/api/Fetch';
import AppContext from './contexts/AppContext';
import Child from './components/Child';
import Reducer from './components/Reducer';
import UseMemo from './components/UseMemo';

function App() {
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
					<UseMemo />
				</header>
			</div>
		</AppContext.Provider>
	);
}

export default App;
