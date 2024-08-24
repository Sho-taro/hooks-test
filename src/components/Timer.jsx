import React, {useState, useEffect} from 'react';

const Timer = () => {
    const [count, setCount] = useState(0)
    const activateTimer = () => {
        setCount(prev => prev+1)
    }

    useEffect(() => {
        console.log("タイマーを開始しました")
        const intervalId = setInterval(activateTimer, 1000)

        // クリーンアップ関数（Timerコンポーネントが消えたときに実行される）
        return () => {
            clearInterval(intervalId)
            console.log("タイマーを消去しました")
        }
    }, [])

	return (
		<div>
            <p>{ count }</p>
		</div>
	);
};

export default Timer;
