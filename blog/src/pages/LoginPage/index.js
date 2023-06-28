import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar";
import styles from './loginpage.module.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        const q = query(collection(db, "users"), where("username", "==", username));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            alert("User not found");
            return;
        }
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.password === password) {
                navigate("/posts");
                return;
            }
            alert("Incorrect password");
        })
    };

    return (
        <Fragment>
            <Navbar />
            <div className={styles.login}>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className={styles.form}><input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
                    <div className={styles.form}><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                    <div className={styles.form}><button type="submit">Login</button></div>
                </form>
            </div>
        </Fragment>
    );
}

export default LoginPage;