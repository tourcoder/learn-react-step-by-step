import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/navbar";
import styles from './homepage.module.css';
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function HomePage() {
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
            <Navbar />
            <ul className={styles.postlist}>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/detail/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}
  
export default HomePage;