import React, {useState, useEffect} from 'react';
import Timer from './Timer';

const TimerContainer = () => {

    const [display, setDisplay] = useState(true)
    const handleClick = () => {
        setDisplay(!display)
    }

	return (
		<div>
            <button onClick={handleClick}>{display ? "Hide Timer" : "Show Timer"}</button>
            {display && <Timer />}
		</div>
	);
};

export default TimerContainer;
