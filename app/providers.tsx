"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1E5B43",
      dark: "#123828",
      light: "#4E8A72",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#195B8A",
      dark: "#134870",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F4F8F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#14231B",
      secondary: "#5A6860",
    },
    success: {
      main: "#2D8C5E",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily:
      '"Inter", "Avenir Next", "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 0.95,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.05,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 1.15,
    },
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h6: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    subtitle1: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    overline: {
      fontWeight: 700,
      letterSpacing: "0.16em",
      fontSize: "0.72rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 22,
          minHeight: 44,
          fontSize: "0.9rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          paddingInline: 28,
          minHeight: 52,
          fontSize: "0.95rem",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #1E5B43 0%, #2A7A5A 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #123828 0%, #1E5B43 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(20, 35, 27, 0.06)",
          border: "1px solid rgba(20, 35, 27, 0.07)",
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 24px rgba(20, 35, 27, 0.06)",
          backgroundImage: "none",
        },
        elevation0: {
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "& fieldset": {
            borderColor: "rgba(20, 35, 27, 0.15)",
          },
          "&:hover fieldset": {
            borderColor: "rgba(30, 91, 67, 0.40)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 800,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
