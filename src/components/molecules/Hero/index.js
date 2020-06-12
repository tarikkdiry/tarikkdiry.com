import React from "react";
import styles from "./index.module.scss";
import "../../../styles/global.scss";

const Hero = ({title, date, forward}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.date}>
                <h3>{date}</h3>
            </div>
            <div className={styles.forward}>
                <h4>{forward}</h4>
            </div>
        </div>
    )
};

export default Hero;