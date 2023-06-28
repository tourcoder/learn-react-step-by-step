import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from "react";
import Navbar from "../../components/navbar";
import styles from './homepage.module.css';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
        .then(response => {
            setPosts(response.data.data.array);
        })
    }, []);

    return (
        <Fragment>
            <Navbar />
            <ul className={styles.postlist}>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href="/detail">{post.title}</a>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
  
export default HomePage;