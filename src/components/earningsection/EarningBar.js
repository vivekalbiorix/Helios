import React from "react";
import styles from "./EarningBar.module.css";
import DownArrow from "../../assets/arrow-down.png";
import Tooltip from "@mui/material/Tooltip";

function EarningBar() {
  return (
    <>
      <div className={styles.earningBarOuter}>
        <div className={styles.earningBarArrorw}>
        <img src={DownArrow}></img>
         
        <div className={styles.tooltip}>
            <p>Company Average Rating
</p>
<span>Trailing 4 Quarters</span>
        </div>
        </div>
        <div className={styles.earningBarMain}>
          <div className={styles.earningRound}>
            <div className={styles.earningRoundSub}></div>
          </div>
          <div className={styles.earningBarsub}></div>
        </div>
        <div className={styles.earningBarBottom}>
          <div className={styles.earningBarBottomLeft}>
            <div>|</div>
            <div>Bearish</div>
          </div>
          <div className={styles.earningBarBottomRight}>
            {" "}
            <div>|</div>
            <div>Bullish</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EarningBar;
