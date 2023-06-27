import React from "react";
import { Fragment } from "react";

function HomePage() {
    return (
        <Fragment>
            <div className="topbar">
                <h1>Blog</h1>
                <a href="/login">Login</a>
            </div>
            <ul className="post-list">
                <li><a href="/detail">Title</a></li>
                <li><a href="/detail">Title</a></li>
                <li><a href="/detail">Title</a></li>
            </ul>
        </Fragment>
    );
  }
  
  export default HomePage;
