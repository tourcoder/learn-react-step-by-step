import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Menubar from "../../components/menubar";
import PostComments from "../PostComment";
import styles from './posteditpage.module.css';
import { db } from "../../firebase";
import { getDoc, updateDoc, doc } from "firebase/firestore";

function PostEditPage() {
    const { id } = useParams();
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setTitle(data.title);
                setContent(data.content);
            } else {
                alert("No such document!");
            }
        };

        fetchPost();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, { title: title, content: content });

        alert('Post updated successfully');
    };

    return (
        <Fragment>
            <Menubar />
            <div className={styles.postedit}>
                <h2>Edit Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form}><input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /></div>
                    <div className={styles.form}><textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea></div>
                    <div className={styles.form}><button type="submit">Update</button></div>
                </form>
            </div>
            <PostComments />
        </Fragment>
    );
}

export default PostEditPage;