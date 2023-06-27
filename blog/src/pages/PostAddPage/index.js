import React from "react";
import { Fragment } from "react";
import styles from './postaddpage.module.css';

function PostAddPage() {
    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
                <a href="/logout">Logout</a>
            </div>
            <div className={styles.postadd}>
                <h2>Add Post</h2>
                <form>
                    <div className={styles.form}><label htmlFor="title">Title</label></div>
                    <div className={styles.form}><input type="text" id="title" name="title" /></div>
                    <div className={styles.form}><label htmlFor="content">Content</label></div>
                    <div className={styles.form}><textarea id="content" name="content"></textarea></div>
                    <div className={styles.form}><input type="submit" value="Add Post" /></div>
                </form>
            </div>
        </Fragment>
    );
}

export default PostAddPage;