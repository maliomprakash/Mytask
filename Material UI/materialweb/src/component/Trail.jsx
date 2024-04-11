import React from 'react';
import { Link } from '@mui/material';
import { Container, Typography, Button, Box } from '@mui/material';

const Trail = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="xl" sx={{ px: 4 }}>
        <Box sx={{ maxWidth: 'sm', mx: 'auto', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: 'black' }}>
            Start your free trial today
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#6B7280', fontSize:'20'}}>
            Try Landwind Platform for 30 days. No credit card required.
          </Typography>
          <Button
            component={Link}
            to="#"
            variant="contained"
            size="large"
            sx={{
              borderRadius: '5',
              color: 'white',
              backgroundColor: '#7C3AED',
              '&:hover': {
                backgroundColor: '#6D28D9',
              },
            }}
          >
            Free trial for 30 days
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Trail;
