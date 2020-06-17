import React from "react";
import { useStaticQuery } from "gatsby";
import Icon from "../../../../assets/icons/social/email.png";
import styles from "../social.module.scss";

const Email = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    email
                }
            }
        }
    `)

    return (
        <div className={styles.container}>
            <a href={data.site.siteMetadata.email} target="_blank">
                <img src={Icon} className={styles.logo}></img>
            </a>
        </div>
    )
}

export default Email;