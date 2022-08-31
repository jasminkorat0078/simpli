import { createTheme } from "@mui/material";

export const PALETTE_PRIMARY_DARK = "#223280";
export const PALETTE_PRIMARY_MAIN = "#3DDF87";
export const PALETTE_SECONDARY_LIGHT = "#F1F3FF";
export const PALETTE_SECONDARY_MAIN = "#E4EAFF";
export const PALETTE_SECONDARY_DARK = "#dee3ff";
export const PALETTE_HIGHLIGHT_MAIN = "#3DDF87";
export const PALETTE_SUCCESS_MAIN = "#2EA765";
export const PALETTE_TEXT_MAIN = "#14215B";
export const PALETTE_TEXT_SECONDARY = "#727A9D";
export const PALETTE_TEXT_LINK = "#3399ff";
export const PALETTE_BORDER_MAIN = "#D5D9EE";
export const PALETTE_BORDER_LIGHT = "#EFEFEF";
export const PALETTE_BACKGROUND_SECONDARY = "#F8FAFF";
export const PALETTE_BACKGROUND_MAIN = "#1D2E4A";
export const PALETTE_BACKGROUND_LIGHT = "#192E49";
export const PALETTE_BACKGROUND_DARK = "#0D2440";


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 720,
      sm: 960,
      md: 1085,
      lg: 1580,
      xl: 1920
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    color: PALETTE_TEXT_MAIN
  },
  palette: {
    mode: "light",
    primary: {
      main: PALETTE_PRIMARY_MAIN,
      dark: PALETTE_PRIMARY_DARK
    },
    secondary: {
      main: PALETTE_SECONDARY_MAIN,
      dark: PALETTE_SECONDARY_DARK,
      light: PALETTE_SECONDARY_LIGHT
    },
    text: {
      primary: PALETTE_TEXT_MAIN,
      default: PALETTE_TEXT_MAIN,
      secondary: PALETTE_TEXT_SECONDARY,
      link: PALETTE_TEXT_LINK,
    },
    highlight: {
      main: PALETTE_HIGHLIGHT_MAIN
    },
    success: {
      main: PALETTE_SUCCESS_MAIN
    },
    border: {
      main: PALETTE_BORDER_MAIN,
      light: PALETTE_BORDER_LIGHT
    },
    background: {
      main: PALETTE_BACKGROUND_MAIN,
      secondary: PALETTE_BACKGROUND_SECONDARY,
      light: PALETTE_BACKGROUND_LIGHT,
      dark: PALETTE_BACKGROUND_DARK,
      default: PALETTE_BACKGROUND_DARK
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          "&.MuiInputBase-multiline": {
            paddingTop: 20,
            paddingBottom: 20
          },

          "& .Mui-disabled": {
            WebkitTextFillColor: "#ffffff66 !important"
          }
        }
      }
    },  
  },
});

export default theme;
