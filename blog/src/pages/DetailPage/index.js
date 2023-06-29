import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import CommentList from "../CommentList";
import CommentAdd from "../CommentAdd";
import styles from './detailpage.module.css';
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function DetailPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchPost = async () => {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            setTitle(data.title);
            setContent(data.content);
        } else {
            alert("No such post!");   
        }
    };

    return (
        <Fragment>
            <Navbar />
            <div className={styles.postdetail}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <CommentAdd />
            <CommentList />
        </Fragment>
    );
}

export default DetailPage;
