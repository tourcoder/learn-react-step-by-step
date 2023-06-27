import React from "react";
import { Fragment } from "react";
import styles from './loginpage.module.css';

function LoginPage() {
    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <a href="/">Home</a>
            </div>
            <div className={styles.login}>
                <h2>Login</h2>
                <form>
                    <div className={styles.form}><input type="text" placeholder="Username" /></div>
                    <div className={styles.form}><input type="password" placeholder="Password" /></div>
                    <div className={styles.form}><button type="submit">Login</button></div>
                </form>
            </div>
        </Fragment>
    );
}

export default LoginPage;