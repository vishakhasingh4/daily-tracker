import * as React from "react";
export interface buttonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}
export default function CustomButton(props: buttonProps): JSX.Element;
