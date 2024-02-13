import { Box, Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import BannerLayout from 'layout/BannerLayout';
import Header from 'layout/Header';
import { themeSettings } from "theme";

function App() {

  const theme = createTheme(themeSettings());

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <BannerLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
