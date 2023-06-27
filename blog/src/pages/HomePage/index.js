import React from "react";
import { Fragment } from "react";
import styles from './homepage.module.css';

function HomePage() {
    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <a href="/login">Login</a>
            </div>
            <ul className={styles.postlist}>
                <li><a href="/detail">Title</a></li>
                <li><a href="/detail">Title</a></li>
                <li><a href="/detail">Title</a></li>
            </ul>
        </Fragment>
    );
}
  
export default HomePage;