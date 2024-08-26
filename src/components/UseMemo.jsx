import React, {useState, useMemo} from 'react';

const UseMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleAdd1 = () => {
        setCount1(prev => prev + 1);
    }
    const handleAdd2 = () => {
		setCount2(prev => prev + 1);
    };

    // count1が奇数かどうか判定する関数
    // わざと処理を遅くしている
    const isOddCount1 = () => {
        for (let i = 0; i <= 10 ** 9; i++) {
            i++;
        }
        return count1 % 2 == 1;
    }

    // 再レンダされるたびに処理の重いisOddCount1関数が実行される。Add2ボタンを押したときも処理が重い。
    // useMemoを使ってisOddCount1の結果をキャッシュすれば、Add2ボタンを押したときの処理が軽くなる
    const isOddCount1Memo = useMemo(isOddCount1, [count1])

	return (
		<div>
			<h3>useMemo</h3>
			<div>
				<p>
					Count1: {count1}({isOddCount1Memo ? 'Odd' : 'Even'})
				</p>
				{/* <p>Count1: {count1}({isOddCount1() ? "Odd": "Even"})</p> */}
				<button onClick={handleAdd1}>Add1</button>
			</div>
			<div>
				<p>Count2: {count2}</p>
				<button onClick={handleAdd2}>Add2</button>
			</div>
		</div>
	);
};

export default UseMemo;
