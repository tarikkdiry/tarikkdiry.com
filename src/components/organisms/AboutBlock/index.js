import React from "react";
import About from "../../molecules/About/index";
import styles from "./index.module.scss";

const IntroBlock = () => {
    return (
        <div className={styles.container}>
            <About></About>
        </div>
    )
}

export default IntroBlock;