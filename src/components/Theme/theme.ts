import { createTheme, ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9C27B0", // Cosmic Purple
    },
    secondary: {
      main: "#FFD700", // Golden Accents
    },
    background: {
      default: "#0D0D26", // Deep Space Dark Blue
      paper: "rgba(20, 20, 50, 0.8)", // Semi-transparent card backgrounds
    },
    text: {
      primary: "#FFFFFF", // White text for contrast
      secondary: "#B0A8B9", // Soft cosmic gray
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#FFD700",
      textShadow: "0px 0px 10px rgba(255, 215, 0, 0.8)",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    body1: {
      fontSize: "1rem",
      color: "#B0A8B9",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(20, 20, 50, 0.6)", // Glassmorphic effect
        //   backdropFilter: "blur(5px)",
          borderRadius: "12px",
          padding: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.6)",
          },
        },
      },
    },
  },
});


export const differentTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light", // Adjust based on preference
    primary: {
      main: "#3366FF", // Gradient Blue
    },
    secondary: {
      main: "#8A2BE2", // Cosmic Purple
    },
    background: {
      default: "#EAF4FF", // Light Sky Blue Background
      paper: "rgba(255, 255, 255, 0.9)", // Glass effect background
    },
    text: {
      primary: "#2C2C54", // Dark Blue for readability
      secondary: "#5F5F87", // Muted purple
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "2.8rem",
      fontWeight: 700,
      color: "#3366FF",
      textAlign: "center",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#8A2BE2",
      textAlign: "center",
    },
    body1: {
      fontSize: "1rem",
      color: "#2C2C54",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.9)", // Soft glass effect
          borderRadius: "12px",
          padding: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
          background: "linear-gradient(90deg, #3366FF 0%, #8A2BE2 100%)",
          color: "#FFF",
          "&:hover": {
            boxShadow: "0px 4px 15px rgba(51, 102, 255, 0.5)",
          },
        },
      },
    },
  },
});



export const cosmicTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5E5CE6", // Vibrant cosmic blue
    },
    secondary: {
      main: "#FFD700", // Gold for luxury highlights
    },
    background: {
      default: "#1A1B3D", // Deep indigo cosmic background
      paper: "rgba(255, 255, 255, 0.12)", // Soft glass effect
    },
    text: {
      primary: "#FFFFFF", // Clear white for readability
      secondary: "#D1C4E9", // Muted lavender
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "2.8rem",
      fontWeight: 700,
      color: "#FFD700",
      textAlign: "center",
      textShadow: "0px 0px 10px rgba(255, 215, 0, 0.6)",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#FFFFFF",
      textAlign: "center",
    },
    body1: {
      fontSize: "1rem",
      color: "#D1C4E9",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.12)", // Glass effect with blur
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0px 4px 15px rgba(94, 92, 230, 0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
          background: "linear-gradient(90deg, #5E5CE6 0%, #8A2BE2 100%)",
          color: "#FFF",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 0px 15px rgba(94, 92, 230, 0.8)",
          },
        },
      },
    },
  },
});



export const mildTheme: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6C63FF", // Bright cosmic violet
    },
    secondary: {
      main: "#FFC75F", // Vibrant gold
    },
    background: {
      default: "#241F48", // Deep space indigo
      paper: "rgba(255, 255, 255, 0.15)", // Enhanced glass effect
    },
    text: {
      primary: "#FFFFFF", // Crystal white for clarity
      secondary: "#E0B3FF", // Soft pastel violet
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)", // Subtle glow effect
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
      color: "#FFC75F",
      textAlign: "center",
      textShadow: "0px 0px 15px rgba(255, 199, 95, 0.6)",
    },
    h2: {
      fontSize: "2.2rem",
      fontWeight: 700,
      color: "#6C63FF",
      textAlign: "center",
      textShadow: "0px 0px 10px rgba(108, 99, 255, 0.7)",
    },
    body1: {
      fontSize: "1.1rem",
      color: "#E0B3FF",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.15)", // Glassmorphism
          borderRadius: "18px",
          padding: "18px",
          boxShadow: "0px 5px 18px rgba(108, 99, 255, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          padding: "14px 28px",
          fontSize: "17px",
          fontWeight: "bold",
          textTransform: "none",
          background: "linear-gradient(90deg, #6C63FF 0%, #A86EE2 100%)",
          color: "#FFF",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 0px 20px rgba(108, 99, 255, 0.9)",
          },
        },
      },
    },
  },
});



export const palletTheme = createTheme({
  palette: {
    primary: {
      main: "#2D336B", // Deep purple-blue
      light: "#7886C7", // Soft blue
      dark: "#1A1F4A", // Darker variant
      contrastText: "#FFF2F2", // Light text
    },
    secondary: {
      main: "#A9B5DF", // Soft lavender
      light: "#D0D6F0", // Lighter variant
      dark: "#7B88B0", // Darker shade
      contrastText: "#2D336B", // Dark blue text
    },
    background: {
      default: "#F2F4FF", // Light lavender background
      paper: "#2D336B", // Deep purple-blue card background
    },
    text: {
      primary: "#FFF2F2", // White text for contrast
      secondary: "#A9B5DF", // Soft blue-gray text
    },
    action: {
      active: "#FFF2F2", // Active elements in light theme
      hover: "#A9B5DF", // Hover effect color
      selected: "#7886C7", // Selected item color
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#2D336B",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#2D336B",
    },
    body1: {
      fontSize: "1rem",
      color: "#FFF2F2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #2D336B, #7886C7)",
          color: "#FFF2F2",
          borderRadius: "8px",
          padding: "10px 20px",
          textTransform: "none",
          fontWeight: "bold",
          '&:hover': {
            background: "linear-gradient(90deg, #1A1F4A, #2D336B)",
          },
        },
      },
    },
  },
});



// export default darkTheme;


