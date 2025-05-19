import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header.jsx';
import Content from './Content';
import { ToastProvider } from './context/ToastContext.js';

function App() {
  return (
    <ToastProvider>
      <Header />
      <Container>
        <Content />
      </Container>
    </ToastProvider>
  );
}

export default App;
