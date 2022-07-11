import React from "react";
import { Button, Chip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";

import styles from "./trackerCard.module.css";
import CustomButton from "../../common/components/Button";

export interface TrackerCardProps {
  projects: string[];
}

const TrackerCard: React.FC<TrackerCardProps> = (props) => {
  const { projects } = props;
  return (
    <div className={styles.card}>
      <div className={styles.actions}>
        <div className={styles.toggle}>
          <Chip
            size="medium"
            variant="outlined"
            label={props.projects[0]}
            clickable={true}
          />
          <Chip
            size="medium"
            variant="outlined"
            label={props.projects[1]}
            clickable={true}
          />
        </div>
        <div>
          <CustomButton onClick={() => console.log("hi")}>
            Clock In
          </CustomButton>
        </div>
      </div>
      {projects.map((project) => (
        <div className={styles.container}>
          <div className={styles.containerTitle}>{project}</div>
          <div></div>
          <div className={styles.create}>
            <IconButton aria-label="add" size="medium" color="warning">
              <AddBoxIcon fontSize="inherit" />
            </IconButton>
			<div>Add Task</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerCard;
