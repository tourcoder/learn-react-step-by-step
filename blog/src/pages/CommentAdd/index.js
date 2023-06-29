import React, { Fragment } from "react";
import styles from './commentadd.module.css';
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function CommentAdd() {
    const { id } = useParams();
    const [author, setAuthor] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "comments"), {
                author: author,
                content: content,
                postid: id
            });
            setAuthor("");
            setContent("");
            alert("Comment added!");
        } catch (error) {
            console.error("Error adding post: ", error);
        }
    };

    return (
        <Fragment>
            <div className={styles.commentadd}>
                <h2>Leave your comment</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form}><input type="text" placeholder="Name" name="author"  value={author} onChange={handleAuthorChange} /></div>
                    <div className={styles.form}><textarea placeholder="Comment" name="content" value={content} onChange={handleContentChange}></textarea></div>
                    <div className={styles.form}><button type="submit">Add Comment</button></div>
                </form>
            </div>
        </Fragment>
    );
}

export default CommentAdd;