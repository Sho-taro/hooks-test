import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Fetch = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            });
    }, [])
    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{ post.title }</li>
            ))}
        </ul>
    );
};

export default Fetch;
