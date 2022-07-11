import React from "react";
import * as S from "./Dashboard.style";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard";

import styles from "./Dashboard.module.css";
import TrackerCard from "../../components/TrackerCard";

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <div className={styles.container}>
        <div className={styles.infoCard}>
          <InfoCard />
        </div>
        <div className={styles.tracker}>
          <TrackerCard projects={["Project 1", "Project 2"]} />
        </div>
        <div className={styles.crousel}></div>
      </div>
    </S.Container>
  );
};

export default Dashboard;
