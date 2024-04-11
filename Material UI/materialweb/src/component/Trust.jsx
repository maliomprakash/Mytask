import React from 'react';
import { Link } from '@mui/material';
import { Typography, Grid, Button, Box, SvgIcon,Container } from '@mui/material';

const Trust = () => {
    return (
        <Container maxWidth="lg" sx={{ m: 'auto' }}>
            <Box  component="section" sx={{ backgroundColor: 'white', py: 8 }}>
                <Grid container justifyContent="center" maxWidth="xl" spacing={6} sx={{ px: { xs: 4, lg: 6 } }}>
                    <Grid item xs={12} lg={6} sx={{ mb: 8 }}>
                        <Typography variant="body1" color="primary" sx={{ mb: 1}}>Trusted Worldwide</Typography>
                        <Typography variant="h5"  sx={{ mb: 2 , fontWeight:800 }}>Trusted by over 600 million users and 10,000 teams</Typography>
                        <Typography variant="body2" sx={{ fontSize: 16, color:'text.secondary'}}>Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</Typography>
                        <Box sx={{ borderTop: 1, borderColor: 'grey.200', pt: 6, mt: 6 }}>
                            <div>
                                <Link to="#" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', color:'#9333ea' }}>
                                    Explore Legality Guide
                                    <SvgIcon component="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" sx={{ ml: 1 }}>
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </SvgIcon>
                                </Link>
                            </div>
                            <div>
                                <Link to="#" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', color:'#9333ea'}}>
                                    Visit the Trust Center
                                    <SvgIcon component="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" sx={{ ml: 1 }}>
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </SvgIcon>
                                </Link>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} container justifyContent="center" spacing={6}>
                        <Grid item xs={6} md={6}>
                            <SvgIcon component="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" sx={{ width: 40, height: 40, color:'#9333ea' }}>
                                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
                            </SvgIcon>
                            <Typography variant="h5"  sx={{ mb: 2, fontWeight:600}}>99.99% uptime</Typography>
                            <Typography variant="body2" sx={{color:'text.secondary'}}>For Landwind, with zero maintenance downtime</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SvgIcon component="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" sx={{ width: 40, height: 40, color:'#9333ea' }}>
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                            </SvgIcon>
                            <Typography variant="h5" sx={{ mb: 2 ,fontWeight:600  }}>600M+ Users</Typography>
                            <Typography variant="body2" sx={{color:'text.secondary'}}>Trusted by over 600 million users around the world</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SvgIcon component="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" sx={{ width: 40, height: 40, color:'#9333ea'}}>
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path>
                            </SvgIcon>
                            <Typography variant="h5" sx={{ mb: 2 ,fontWeight:600  }}>100+ countries</Typography>
                            <Typography variant="body2" sx={{color:'text.secondary'}}>Have used Landwind to create functional websites</Typography>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <SvgIcon component="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" sx={{ width: 40, height: 40,  color:'#9333ea'}}>
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            </SvgIcon>
                            <Typography variant="h5" sx={{ mb: 2,fontWeight:600}}>5+ Million</Typography>
                            <Typography variant="body2" sx={{color:'text.secondary'}}>Transactions per day</Typography> 
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Trust;
