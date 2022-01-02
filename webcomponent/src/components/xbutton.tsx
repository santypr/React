import React from "react";
import { createUseStyles } from "react-jss";

const jssStyles = createUseStyles({
    themedBlock: {
        '&::part(button)': {
            padding: "20px",
            margin: "20px",
            border: '1px solid purple'
        }
    }
  });

interface IStyledButtonProps {
    text: string
}

export const StyledButton = (props: IStyledButtonProps) => {
    const styles = jssStyles();
   return (
        <button className={styles.themedBlock}>{props.text}</button>
    )
}