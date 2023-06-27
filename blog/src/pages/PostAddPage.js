import React from "react";
import { Fragment } from "react";

function PostAddPage() {
    return (
        <Fragment>
            <div className="topbar">
                <h1>Blog</h1>
                <a href="/logout">Logout</a>
                <a href="/posts">Posts</a>
                <a href="/post_add">Add</a>
            </div>
            <div className="post-add">
                <h2>Add Post</h2>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content"></textarea>
                    <input type="submit" value="Add Post" />
                </form>
            </div>
        </Fragment>
    );
}

export default PostAddPage;