import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./infoCard.module.css";

import { InfoCardData } from "./data";

const InfoCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <Avatar
          alt="Vishakha Singh"
          src=""
          sx={{ width: 56, height: 56, textAlign: "center" }}
        />
        <div className={styles.title}>{InfoCardData.name}</div>
        <div className={styles.subTitle}>{InfoCardData.designation}</div>
      </div>
      <div>
        <div className={styles.bottomBox}>
          {/* <span>{InfoCardData.dayOfWeek}</span> */}
          <span>{InfoCardData.date.toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
