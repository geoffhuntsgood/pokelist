import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const primary = colors.grey[50];
const secondary = colors.yellow[700];
const background = "#141414";
const border = colors.grey[700];

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          width: "10rem",
          color: background,
          fontSize: "2rem",
          backgroundColor: secondary
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: "0 auto",
          color: primary
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: primary,
          "&.Mui-disabled": {
            color: border
          }
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          width: "90vw",
          margin: "auto"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: secondary
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: primary,
          "&.Mui-disabled": {
            color: border
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: primary
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          width: "20rem",
          fontSize: "1.5rem",
          color: primary,
          "& fieldset": {
            borderColor: border
          },
          "& .MuiSvgIcon-root": {
            color: primary
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: "15px"
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: `1px solid ${border}`,
          borderRadius: "3px"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: background,
          fontSize: "1.5rem",
          lineHeight: "1rem"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          backgroundColor: background,
          border: `1px solid ${border}`,
          borderRadius: "5px"
        }
      }
    }
  },
  palette: {
    primary: {
      main: colors.blue[900]
    },
    text: {
      primary: primary,
      secondary: secondary
    }
  },
  typography: {
    fontFamily: "Jersey10",
    fontSize: 24,
    h2: {
      fontFamily: "PokemonGb",
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0 auto",
      padding: "10px 0",
      textAlign: "center"
    },
    h3: {
      fontFamily: "PokemonGb",
      fontSize: "1rem",
      margin: "1.5rem"
    },
    h4: {
      fontSize: "1rem"
    }
  },
  shape: {
    borderRadius: 4
  },
  spacing: 8
});
