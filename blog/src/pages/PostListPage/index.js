import React from "react";
import { Fragment } from "react";
import styles from './postlistpage.module.css';

function PostListPage() {
    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
                <a href="/logout">Logout</a>
            </div>
            <ul className={styles.postlist}>
                <li><a href="/post_edit">Title</a></li>
                <li><a href="/post_edit">Title</a></li>
                <li><a href="/post_edit">Title</a></li>
            </ul>
        </Fragment>
    );
}

export default PostListPage;