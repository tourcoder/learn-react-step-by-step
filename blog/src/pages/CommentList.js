import React from "react";
import { Fragment } from "react";

function CommentList() {
    return (
        <Fragment>
            <div className="comment-list">
                <h2>Comments</h2>
                <ul>
                    <li>
                        <h3>Name</h3>
                        <p>Comment</p>
                    </li>
                    <li>
                        <h3>Name</h3>
                        <p>Comment</p>
                    </li>
                    <li>
                        <h3>Name</h3>
                        <p>Comment</p>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CommentList;