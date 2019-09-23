import React from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import { ProTip } from './components';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright @ '}
    <Link color="inherit" href="https://material-ui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

const App: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}; 
export default App;
