import React from "react";
import Helmet from "react-helmet";
// import Icon from "src/assets/icons/tk_logo_white.png";
import Header from "../molecules/Header/index";
import layoutStyles from "./layout.module.scss";

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            {/* <Helmet> */}
                {/* <link rel="icon" href={Icon}></link> */}
            {/* </Helmet> */}
            <Header></Header>
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        </div>
    )
};

export default Layout;