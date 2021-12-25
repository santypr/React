import React from "react";
import { createUseStyles, useTheme } from 'react-jss';
import { ITheme } from '../../ITheme'

const ThemedBlockStyles = createUseStyles((theme: any) => ({
  themedBlock: {
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    border: '1px solid ' + theme.colors.border,
    borderRadius: '20px',
    background: theme.colors.background,
    color: theme.colors.foreground
  }
}));

const ThemedBlock = (props: any) => {
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
export default ThemedBlock;