import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppClima } from './pages/AppClima';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import './styles.css';

import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <AppClima />
    </SnackbarProvider>
  </StrictMode>,
)
