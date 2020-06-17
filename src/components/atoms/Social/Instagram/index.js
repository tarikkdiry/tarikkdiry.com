import React from "react";
import { useStaticQuery } from "gatsby";
import Icon from "../../../../assets/icons/social/instagram.png";
import styles from "../social.module.scss";

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    instagram
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.instagram} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default Instagram;