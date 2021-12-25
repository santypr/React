import React from "react";
import { useTheme } from 'react-jss';
import { ITheme } from '../../ITheme'
import { ThemedBlockStyles } from "./themedblock.jss";

const ThemedBlockUseTheme = (props: any) => {
  const theme = useTheme() as any;
  const styles = ThemedBlockStyles({...props, theme});

  return (
    <>
    <div className={styles.themedBlock}>
      Hello themed world!! <img src={theme.images.logo} alt="Santiago Porras" />
    </div>
    </> 
  )
};
export default ThemedBlockUseTheme;