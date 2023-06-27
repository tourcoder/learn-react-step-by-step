import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/navbar";
import CommentList from "../CommentList";
import CommentAdd from "../CommentAdd";
import styles from './detailpage.module.css';

function DetailPage() {
    return (
        <Fragment>
            <Navbar />
            <div className={styles.postdetail}>
                <h2>Title</h2>
                <p>Content</p>
            </div>
            <CommentAdd />
            <CommentList />
        </Fragment>
    );
}

export default DetailPage;
