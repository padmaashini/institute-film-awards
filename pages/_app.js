import React from 'react';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import { store } from '../src/redux/store';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    heading: {
      fontFamily: [
        'Great Vibes',
        'cursive',
      ].join(','),
      fontSize: '80px'
    },
    normal: {
      fontFamily: [
        'Open Sans',
        'sans-serif',
      ].join(','),
      fontSize: '20px'
    }
  }
});

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
