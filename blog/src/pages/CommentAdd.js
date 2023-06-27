import React from "react";
import { Fragment } from "react";

function CommentAdd() {
    return (
        <Fragment>
            <div className="comment-add">
                <h2>Leave your comment</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <textarea placeholder="Comment"></textarea>
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        </Fragment>
    );
}

export default CommentAdd;