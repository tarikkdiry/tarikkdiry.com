import React from "react";
import { Link } from "gatsby";
import styles from "./index.module.scss";
import logo from "../../../assets/icons/tk_logo_white.png";
import headerStyles from './index.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <Link to="/">
                <img src={logo} className={headerStyles.logo} style={{height: '40px', width: '50px'}} alt="tk" to="https://tarikkdiry.com"></img>
            </Link>
            <div className={styles.links}>
                <h3>
                    <Link style={{textDecoration: 'none', color: '#F0F0F2'}} className={styles.navItem} to="/blog">Blog</Link>
                </h3>
            </div>
            
        </div>
    )
};

export default Header;