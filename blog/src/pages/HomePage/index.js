import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/navbar";
import styles from './homepage.module.css';

function HomePage() {
    return (
        <Fragment>
            <Navbar />
            <ul className={styles.postlist}>
                <li><a href="/detail">Title</a></li>
                <li><a href="/detail">Title</a></li>
                <li><a href="/detail">Title</a></li>
            </ul>
        </Fragment>
    );
}
  
export default HomePage;