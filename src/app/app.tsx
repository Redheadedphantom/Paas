import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// Redux state type
interface RootState {
  customization: /* your customization state type */ any;
}

// ==============================|| APP ||============================== //

const App: React.FC = () => {
  const customization = useSelector((state: RootState) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
