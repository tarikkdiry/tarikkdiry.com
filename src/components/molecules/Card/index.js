import React from "react";
import styles from "./index.module.scss";
import "../../../styles/global.scss";

const Card = ({title, date, url, forward}) => {
    return (
        <div className={styles.container}>   
            <p>{date}</p>
            <h3>{title}</h3>
            <h6>{forward}</h6>
        </div>
    )
}

export default Card;