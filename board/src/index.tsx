import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const mode = darkMode ? theme.darkMode : theme.lightMode;
  const changeMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mode}>
        <GlobalStyle />
        <Router darkMode={darkMode} changeMode={changeMode} />
      </ThemeProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Index />);
