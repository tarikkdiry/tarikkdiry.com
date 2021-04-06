import React from "react";
// import ProfileImage from "../../../assets/images/tarik_kdiry_profile.png";
import ProfileImage from "../../../assets/images/tarik_kdiry_ams.png";
import styles from "./index.module.scss";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={ProfileImage}></img>
        </div>
    )
}

export default Profile