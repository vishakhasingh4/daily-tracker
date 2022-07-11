import React from "react";
import "./chip.css";
export declare const CHIP_SIZE: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
};
export declare const CHIP_COLORS: {
    DEAFULT: string;
    PRIMARY: string;
    SECONDADRY: string;
};
export interface ChipProps {
    text: string;
    size: string;
    color?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
