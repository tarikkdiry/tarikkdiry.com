import React from "react";
import styles from "./index.module.scss";

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {/* Content */}
                <h3>Subscribe!</h3>
                <h5>You'll be the first to know when I publish any new writing.</h5>
                <h5>Thanks for reading!</h5>
            </div>
            <div className={styles.right}>
                {/* Form */}
                {/* <input placeholder="test"></input>
                <input placeholder="test"></input> */}

            </div>
        </div>
    )
}

export default Subscribe;