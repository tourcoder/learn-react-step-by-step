import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from "react";
import styles from './commentlist.module.css';

function CommentList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('/api/comments')
        .then(response => {
            setComments(response.data.data.array);
        })
    }, []);
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