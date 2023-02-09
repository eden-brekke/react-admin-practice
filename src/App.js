import { ColorModeContext, useMode } from './theme'; // import the functions we just created
import { CssBaseline, ThemeProvider } from '@mui/material'; // resets standard css to nothing, and allows us to use MUIs theme provider


function App() {
  const [theme, colorMode] = useMode(); // get access the the theme and colorMode we created

  return (
    <ColorModeContext.Provider value={colorMode}> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className='content'></main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
