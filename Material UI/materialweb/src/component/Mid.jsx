import React from 'react';
import { Typography, Grid, List, ListItem, Divider, Container } from '@mui/material';
import Chart from   './Chart';
import Chart2 from './Chart2 ';

function Mid() {
    return (
        <>
            <section>
            <Container>
                <Grid container justifyContent="space-between">
                    <Grid item xs={12} md={6} sx={{bgcolor:'white' }}>
                        <Typography variant="h4" gutterBottom>
                            Work with tools you already use
                        </Typography>
                        <Typography variant="body1" paragraph sx={{color:'text.secondary'}}>
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                        </Typography>
                        <List>
                            <ListItem>
                                <Typography variant="body1">
                                    Continuous integration and deployment
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Development workflow
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Knowledge management
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography variant="body1" paragraph>
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Chart />
                    </Grid>
                </Grid>

                <Divider />

                <Grid container justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Chart2/>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" gutterBottom>
                            We invest in the world’s potential
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                        </Typography>
                        <List>
                            <ListItem>
                                <Typography variant="body1">
                                    Dynamic reports and dashboards
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Templates for everyone
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Development workflow
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Limitless business automation
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body1">
                                    Knowledge management
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography variant="body1">
                            Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                        </Typography>
                    </Grid>
                </Grid>
                </Container>
            </section>
        </>
    );
}

export default Mid;
