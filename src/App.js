import { Box, Button, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "theme";

function App() {

  const theme = createTheme(themeSettings());

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            background: theme.palette.rainbowColor
          }}
        >
          <Typography
            fontSize="32px"
            fontWeight="bold"
            variant="secondFontFamily"
          >
            SocialMedia
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
