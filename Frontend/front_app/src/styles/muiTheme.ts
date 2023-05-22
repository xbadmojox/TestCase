import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: "IBM Plex Sans",
  },

  palette: {
    text: {
      disabled: "#656565",
    },
  },

  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#373737 !important",
          opacity: 1,
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "none",
          margin: "1rem auto",
          padding: "1rem 0rem !important",
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
          width: "98vw",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        //@ts-ignore
        root: {
          textTransform: "none !important",
          fontSize: "14px !important",
          fontWeight: "bolder !important",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            border: "2px solid #4A90E2",
          },

          border: "1px solid #7A8391",
          paddingLeft: "10px",
          paddingRight: "4px",
          paddingTop: "5px",
          paddingBottom: "5px",
          borderRadius: "4px",
          marginBottom: "10px",
          fontFamily: "IBM Plex Sans",
          fontSize: "14px",
        },
      },
    },

    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "1rem 0",
        },
      },
    },
    MuiTabs: {},
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        TouchRippleProps: {
          classes: {
            root: "CustomizeTouchRipple",
          },
        },
      },
    },
  },
});

export default Theme;
