import React from "react";
import Header from "../Header/index";
import styles from "./index.module.scss";

const Bio = () => {
    return (
        <div className={styles.container}>
            <h2>about me.</h2>
            <p>
                I'm Tarik, and I'm software engineer! Currently I am building cool things <a href="https://www.leaflink.com/">@LeafLink</a>. 
            </p>
            <p>
                When I'm not behind a screen, I love to travel, watch movies, listen to/play music, learn new languages, etc. 
                While I do try to pursue new interests, I try to incorporate writing into everything that I do.
            </p>
            <p>With that, check out my <a href='/blog/' target="_blank">blog</a> where I occasionally update you on...my life! Things I'm working on, places I am travelling to, thoughts I am having, etc.</p>
            <p>
                Wanna work together? <a href="mailto:tarik.kdiry@gmail.com">Reach out!</a>
            </p>
        </div>
    )
}

export default Bio;