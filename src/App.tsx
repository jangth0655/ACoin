import React from "react";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import Router from "./routes/Router";
import { darkTheme, GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </ThemeProvider>
  );
}

export default App;
