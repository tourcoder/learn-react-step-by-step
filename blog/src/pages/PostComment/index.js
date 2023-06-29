import React, { Fragment, useEffect, useState } from "react";
import useAuthRoute from "../../components/useAuthRoute";
import styles from './postcomment.module.css';
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";


function PostComments () {
    useAuthRoute();
    
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

    const deleteComment = async (commentId) => {
        if (window.confirm('Delete this comment?')) {
            await deleteDoc(doc(db, "comments", commentId));
            alert('Comment deleted successfully');
            fetchComments();
        }
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
                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default PostComments;