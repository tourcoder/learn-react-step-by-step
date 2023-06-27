import React from "react";
import { Fragment } from "react";
import CommentList from "./CommentList";
import CommentAdd from "./CommentAdd";

function DetailPage() {
    return (
        <Fragment>
            <div className="topbar">
                <h1>Blog</h1>
                <a href="/login">Login</a>
            </div>
            <div className="post-detail">
                <h2>Title</h2>
                <p>Content</p>
            </div>
            <CommentAdd />
            <CommentList />
        </Fragment>
    );
}

export default DetailPage;
