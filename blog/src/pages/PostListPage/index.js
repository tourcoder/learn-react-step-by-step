import React from "react";
import { Fragment } from "react";
import Menubar from "../../components/menubar";
import styles from './postlistpage.module.css';

function PostListPage() {
    return (
        <Fragment>
            <Menubar />
            <ul className={styles.postlist}>
                <li><a href="/post_edit">Title</a></li>
                <li><a href="/post_edit">Title</a></li>
                <li><a href="/post_edit">Title</a></li>
            </ul>
        </Fragment>
    );
}

export default PostListPage;