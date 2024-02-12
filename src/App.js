import { Box, Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import Header from 'layout/Header';
import { themeSettings } from "theme";

function App() {

  const theme = createTheme(themeSettings());

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
