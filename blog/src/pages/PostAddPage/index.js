import React from "react";
import { Fragment } from "react";
import Menubar from "../../components/menubar";
import styles from './postaddpage.module.css';

function PostAddPage() {
    return (
        <Fragment>
            <Menubar />
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