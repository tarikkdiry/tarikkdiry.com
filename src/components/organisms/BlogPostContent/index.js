import React from "react";
import Hero from "../../molecules/Hero/index";
import styles from "./index.module.scss";
import "../../../styles/global.scss";

const BlogPostContent = ({title, date, forward, content}) => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <Hero 
                    title={title}
                    date={date}
                    forward={forward}
                />
            </div>
            <div className={styles.content}>
                {content}
            </div>
        </div>
    )
}

export default BlogPostContent;