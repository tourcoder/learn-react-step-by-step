import React from "react";
import { Fragment } from "react";
import PostComments from "../PostComment";
import styles from './posteditpage.module.css';

function PostEditPage() {
    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
                <a href="/logout">Logout</a>
            </div>
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