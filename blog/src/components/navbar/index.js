import React from "react";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import styles from './navbar.module.css';

function Navbar() {
    const location = useLocation();

    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                {location.pathname === '/login' ? (
                    <a href="/">Home</a>
                ) : (
                    <a href="/login">Login</a>
                )}
            </div>
        </Fragment>
    );
}

export default Navbar;