import React, { Fragment, useState } from "react";
import Menubar from "../../components/menubar";
import styles from './postaddpage.module.css';
import { db } from "../../firebase";
import { addDoc, collection } from 'firebase/firestore';
import useAuthRoute from "../../components/useAuthRoute";

function PostAddPage() {
    useAuthRoute();    

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title: title,
                content: content,
                timestamp: Date.now()
            });
            setTitle('');
            setContent('');
            alert("Post added successfully");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Fragment>
            <Menubar />
            <div className={styles.postadd}>
                <h2>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.form}><label htmlFor="title">Title</label></div>
                    <div className={styles.form}><input type="text" id="title" name="title" value={title} onChange={handleTitleChange} /></div>
                    <div className={styles.form}><label htmlFor="content">Content</label></div>
                    <div className={styles.form}><textarea id="content" name="content" value={content} onChange={handleContentChange}></textarea></div>
                    <div className={styles.form}><input type="submit" value="Add Post" /></div>
                </form>
            </div>
        </Fragment>
    );
}

export default PostAddPage;