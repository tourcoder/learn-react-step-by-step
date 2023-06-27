import React from "react";
import { Fragment } from "react";
import PostComments from "./PostComment";

function PostEditPage() {
    return (
        <Fragment>
            <div className="topbar">
                <h1>Blog</h1>
                <a href="/logout">Logout</a>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
            </div>
            <div className="post-edit">
                <h2>Edit Post</h2>
                <form>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Content"></textarea>
                    <button type="submit">Update</button>
                </form>
            </div>
            <PostComments />
        </Fragment>
    );
}

export default PostEditPage;