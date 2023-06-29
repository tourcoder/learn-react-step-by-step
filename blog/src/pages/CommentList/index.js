import React, { useEffect, useState } from 'react';
import { Fragment } from "react";
import styles from './commentlist.module.css';
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";


function CommentList() {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        const q = query(collection(db, "comments"), where("postid", "==", id));
        const querySnapshot = await getDocs(q);
        const comments = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setComments(comments);
    };

    return (
        <Fragment>
            <div className={styles.commentlist}>
                <h2>Comments</h2>
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <h3>{comment.author}</h3>
                            <p>{comment.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default CommentList;