import React from 'react';
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
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme.lightMode}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<Index />);
