import React from "react";
import Profile from "../../atoms/Profile/index";
import Bio from "../../atoms/Bio/index";
import styles from "./index.module.scss";

const About = () => {
    return (
        <div className={styles.container}>
            <Bio></Bio>
            <Profile></Profile>
        </div>
    );
}

export default About;