import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth='xl'>
        <Box sx={{ my: 2 }}>
          {children}
          <Footer />
        </Box>
      </Container>
    </React.Fragment>
  );
}
