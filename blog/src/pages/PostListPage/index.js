import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Menubar from "../../components/menubar";
import styles from './postlistpage.module.css';

function PostListPage() {
    const [posts, setPosts] = useState([]);
        
    useEffect(() => {
        axios.get('/api/posts')
        .then(response => {
            setPosts(response.data.data.array);
        })
    }, []);

    return (
        <Fragment>
            <Menubar />
            <ul className={styles.postlist}>
                {posts.map(post => (
                    <li key={post.id}>
                        <a href="/post_edit">{post.title}</a>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default PostListPage;