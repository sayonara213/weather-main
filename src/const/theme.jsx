import {createGlobalStyle, ThemeProvider} from "styled-components";
import main from "../assets/fonts/AmsiProNormal-Bold.ttf"
import {normalize} from "./normalize";

    export const COLORS ={
        light: {
            background: "#eaecef",
            text: "#202b3b",
            document: "#f5f5f5",
            grey: "#9399a2",
            border: "#c7c7c7"
        },
        dark: {
            background: "#151310",
            text: "#FFFFFF",
            document: "#0a0a0a",
            grey: "#6d665d",
            border: "#373737"
        }
    }

    export const FONT_SIZE = {
        small: "16px",
        medium: "20px",
        large: "30px",
        temperature: "70px"
    }

    export const FONT_WEIGHT = {
        light: "300",
        normal: "400",
        bold: "700"
    }

    export const BORDER_RADIUS = {
        small: "5px",
        medium: "15px",
        large: "20px",
    }

    export const light = {
        colors: COLORS.light,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        borderRadius: BORDER_RADIUS
    }
    export const dark = {
        colors: COLORS.dark,
        fontSize: FONT_SIZE,
        fontWeight: FONT_WEIGHT,
        borderRadius: BORDER_RADIUS
    }

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme === "light" ? light.colors.document : dark.colors.document};
  }
  @font-face {
    font-family: "bold";
    src: url(${main});
  }
  ${normalize}
`;

export const Theme = ({ children, theme }) => {
    console.log()
    return (
        <ThemeProvider theme={theme === "light" ? light : dark }>
            <GlobalStyle theme={theme}/>
            {children}
        </ThemeProvider>
    );
};

