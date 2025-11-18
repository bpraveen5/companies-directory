import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CompaniesProvider } from "./context/CompaniesContext";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CompaniesProvider>
          <App />
      </CompaniesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
