import React from "react";
import { Fragment } from "react";
import styles from './commentadd.module.css';

function CommentAdd() {
    return (
        <Fragment>
            <div className={styles.commentadd}>
                <h2>Leave your comment</h2>
                <form>
                    <div className={styles.form}><input type="text" placeholder="Name" /></div>
                    <div className={styles.form}><textarea placeholder="Comment"></textarea></div>
                    <div className={styles.form}><button type="submit">Add Comment</button></div>
                </form>
            </div>
        </Fragment>
    );
}

export default CommentAdd;