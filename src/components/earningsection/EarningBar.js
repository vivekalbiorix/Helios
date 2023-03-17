import React from "react";
import styles from "./EarningBar.module.css";
import DownArrow from "../../assets/arrow-down.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import { StarBorder, StarHalf } from "@mui/icons-material";

function EarningBar() {
  return (
    <>
      <div className={styles.earningBarOuter}>
        <div className={styles.earningBarArrorw}>
          <img src={DownArrow}></img>

          <div className={styles.toolTipOuter}>
            <span className={styles.toolTipHeader}>Company Average Rating</span>
            <span className={styles.tootipContent}>Trailing 4 Quarters</span>
          </div>
        </div>
        <div className={styles.earningBarMain}>
          <div className={styles.earningRoundOuter}>
            <div className={styles.earningRound}>
              <div className={styles.earningRoundSub}></div>
              <div className={styles.toolTip2Outer}>
                <span className={styles.toolTipHeader}>
                  This event's rating
                </span>
                <span className={styles.tootipContent}>
                  <span className={styles.tootipRateTotal}>1.5</span>
                  <StarIcon color="warning" fontSize="small" />
                  <StarHalf color="warning" fontSize="small" />
                  <StarBorder color="warning" fontSize="small" />
                  <StarBorder color="warning" fontSize="small" />
                  <StarBorder color="warning" fontSize="small" />
                </span>
              </div>
            </div>
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
