import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = () => {
	const [posts, setPosts] = useState([]);
	const [id, setId] = useState('');

	const handleInputChange = e => {
		setId(e.target.value);
	};
	const handleClick = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
			    setPosts([res.data]);
		    });
	};

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
			setPosts(res.data);
		});
		// fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
		//     .then(res => res.json())
		//     .then(data => {
		//         setPosts(data)
		//     });
	}, []);

	return (
		<div>
			<p>
				<input type="text" value={id} onChange={handleInputChange} />
			</p>
			<button onClick={handleClick}>Submit</button>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Fetch;
