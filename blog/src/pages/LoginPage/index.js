import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/navbar";
import styles from './loginpage.module.css';

function LoginPage() {
    return (
        <Fragment>
            <Navbar />
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