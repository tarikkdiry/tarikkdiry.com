import React from "react";
import styles from "./index.module.scss";
import "../../../styles/global.scss";

const Hero = ({title, date, forward}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
        </div>
    )
};

export default Hero;