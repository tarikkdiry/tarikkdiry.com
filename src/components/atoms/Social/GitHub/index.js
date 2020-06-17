import React from "react";
import { useStaticQuery } from "gatsby";
import Icon from "../../../../assets/icons/social/github.png";
import styles from "../social.module.scss";

const Github = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    github
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.github} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default Github;