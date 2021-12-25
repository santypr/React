import React from "react";
import { ThemeSelectorStyles } from "./themeselector.jss";

interface IThemeSelector {
    currentTheme: string,
    changeTheme: (themeValue: string) => any
}

export const ThemeSelector = (props: IThemeSelector) => {
    const styles = ThemeSelectorStyles();
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>): any => {
        let item = event.target as HTMLSelectElement;
        props.changeTheme(item.value);
    }

    return (
        <>
            <select className={styles.ThemeSelectorStyled}
                    value={props.currentTheme}
                    onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </>
    )
}