import React from "react";
import { Fragment } from "react";

function PostListPage() {
    return (
        <Fragment>
            <div className="topbar">
                <h1>Blog</h1>
                <a href="/logout">Logout</a>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
            </div>
            <ul className="post-list">
                <li><a href="/post_edit">Title</a></li>
                <li><a href="/post_edit">Title</a></li>
                <li><a href="/post_edit">Title</a></li>
            </ul>
        </Fragment>
    );
}

export default PostListPage;