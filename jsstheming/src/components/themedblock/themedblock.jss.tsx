import { createUseStyles } from "react-jss";

export const ThemedBlockStyles = createUseStyles((theme: any) => ({
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
