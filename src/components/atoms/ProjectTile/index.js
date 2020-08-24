import React from "react";
import styles from "./index.module.scss";

const ProjectTile = ({ title, description, link, technology}) => {
    const techListString =  technology.join(" ");

    return (
        <div className={styles.container} href={link}> 
            <div className={styles.title}>
                <h4>{title}</h4>
            </div>
            <div className={styles.description}>
                <h5>{description}</h5>
            </div>
            <div className={styles.technology}>
                <p>{techListString}</p>
            </div>
        </div>
    );
};

export default ProjectTile;