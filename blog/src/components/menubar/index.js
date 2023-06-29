import React, { Fragment } from "react";
import styles from './menubar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from "../../components/AuthContext";

function Menubar () {
    const { setToken } = useAuth();
    
    const handleLogout = (event) => {
        event.preventDefault();
        setToken(null);
    };

    return (
        <Fragment>
            <div className={styles.topbar}>
                <h1>Blog</h1>
                <Link to="/posts">Posts</Link>
                <Link to="/post_add">Add</Link>
                <Link to="#" onClick={handleLogout}>Logout</Link>
            </div>
        </Fragment>
    );
}

export default Menubar;