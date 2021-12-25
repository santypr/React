import React from "react";
import { useTheme } from 'react-jss';
import { ITheme } from '../../ITheme'
import { ThemedBlockStyles } from "./themedblock.jss";

const ThemedBlockUseTheme = (props: any) => {
  const theme = useTheme();
  const styles = ThemedBlockStyles({...props, theme});

  return (
    <>
    <div className={styles.themedBlock}>
      Hello themed world!!
    </div>
    </> 
  )
};
export default ThemedBlockUseTheme;