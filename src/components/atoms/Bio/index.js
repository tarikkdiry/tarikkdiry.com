import React from "react";
import styles from "./index.module.scss";

const Bio = () => {
    return (
        <div className={styles.container}>
            <h1>about me.</h1>
            <p>
                Hello! My name is Tarik Kdiry and I'm a software engineer. 
            </p>
            <p>
                Currently, I am a developer <a href="https://www.mmc.com">@MMC</a>, where I try to find problems I can solve using React. When I'm not at the office, I look forward to building new things through my <a href="https://github.com/tarikkdiry" target="_blank">personal projects.</a> 
            </p>
            <p>
                When I'm not behind a screen, I love to travel, watch movies, listen to/play music, learn new languages, etc. 
                While I do try to pursue new interests, I try to incorporate writing into everything that I do.
            </p>
            <p>With that, check out my <a href='https://tarikkdiry.com/blog/' target="_blank">blog</a> where I try to regularly update you on any of my travels, fashion tidbits, coding, and everything in between.</p>
        </div>
    )
}

export default Bio;