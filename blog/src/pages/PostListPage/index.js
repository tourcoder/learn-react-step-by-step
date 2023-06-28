import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Menubar from "../../components/menubar";
import styles from './postlistpage.module.css';
import { db  } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function PostListPage() {
    const [posts, setPosts] = useState([]);
        
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setPosts(posts);
    };

    return (
        <Fragment>
            <Menubar />
            <ul className={styles.postlist}>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post_edit/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default PostListPage;