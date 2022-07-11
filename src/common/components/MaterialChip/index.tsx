import React from "react";
import Chip from "@mui/material/Chip";

export const MATERIALCHIP_COLORS = {
  DEAFULT: "default",
  PRIMARY: "primary",
  SECONDADRY: "secondary",
};

export interface MaterialChipProps {
  label: string;
  size:string;
  variant: string;
  color?: string;
  isClickable: boolean;
}

export const MATERIALCHIP_SIZE = {
	SMALL: "small",
	MEDIUM: "medium",
	DEFAULT: undefined,
}

const MaterialChip: React.FC<MaterialChipProps> = (props) => {
  const { label, size = MATERIALCHIP_SIZE.DEFAULT, variant, color, isClickable } = props;
  const customSize = (size === "small") ? "small" : "medium"; 
  const customVariant = variant === 'outlined' ? "outlined" : "filled";
  return <Chip label={label} size={customSize} variant={customVariant} clickable={isClickable} />;
};
