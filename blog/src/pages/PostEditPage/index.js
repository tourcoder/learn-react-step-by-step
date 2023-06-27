import React from "react";
import { Fragment } from "react";
import Menubar from "../../components/menubar";
import PostComments from "../PostComment";
import styles from './posteditpage.module.css';

function PostEditPage() {
    return (
        <Fragment>
            <Menubar />
            <div className={styles.postedit}>
                <h2>Edit Post</h2>
                <form>
                    <div className={styles.form}><input type="text" placeholder="Title" /></div>
                    <div className={styles.form}><textarea placeholder="Content"></textarea></div>
                    <div className={styles.form}><button type="submit">Update</button></div>
                </form>
            </div>
            <PostComments />
        </Fragment>
    );
}

export default PostEditPage;