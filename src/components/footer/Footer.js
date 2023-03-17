import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerOuter}>
        <div className={styles.footerOuterLeft}>
          Copyright © 2020-2022 Helios Life Enterprises, Inc. All rights
          reserved. | Terms and Conditions
        </div>
        <div className={styles.footerOuterRight}>
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </>
  );
}

export default Footer;
