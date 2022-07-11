import React from "react";
import "./chip.css";

export const CHIP_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const CHIP_COLORS = {
  DEAFULT: "default",
  PRIMARY: "primary",
  SECONDADRY: "secondary",
};

export interface ChipProps {
  text: string;
  size: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Chip: React.FC<ChipProps> = (props: ChipProps) => {
  const { text, size, color = CHIP_COLORS.DEAFULT, onClick } = props;

  return (
    <div className={`dt-chip-container dt-chip-${size} dt-chip-${color}`}>
      {text}
    </div>
  );
};

export default Chip;
