import React from "react";
import { withTheme } from 'react-jss';
import { ITheme } from '../../ITheme'
import { ThemedBlockStyles } from "./themedblock.jss";

const ThemedBlockWithTheme = (props: any) => {
  const styles = ThemedBlockStyles(props.theme);

  return (
    <>
    <div className={styles.themedBlock}>
      Hello themed world!!
    </div>
    </> 
  )
};
export default withTheme(ThemedBlockWithTheme);