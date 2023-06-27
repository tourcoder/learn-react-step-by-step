import React from "react";
import { Fragment } from "react";
import styles from './menubar.module.css';

function Menubar () {
    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
                <a href="/logout">Logout</a>
            </div>
        </Fragment>
    );
}

export default Menubar;