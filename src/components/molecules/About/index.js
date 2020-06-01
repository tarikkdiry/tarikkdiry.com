import React from "react";
import Profile from "../../atoms/Profile/index.js";

import styles from "./index.module.scss";

const About = () => {
    return (
        <div className={styles.container}>
            <h2>Testing</h2>
            <Profile></Profile>
        </div>
    );
}

export default About;