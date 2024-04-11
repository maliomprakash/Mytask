import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Box,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import img1 from "../image/banner.png";
import Google from "../image/google.svg";
import Airbnb from "../image/air.svg";
import Mailchimp from "../image/munk.svg";
import Spotify from "../image/spotify.svg";
import uber from "../image/mass.svg";
import Microsoft from "../image/microsoft.svg";

export default function Banner() {
  return (
    <Container maxWidth="lg" sx={{ py: 10, m: "auto" }}>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ mr: "auto", placeSelf: "center", pr: 5 }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              sx={{ display: { xs: "none", md: "block" } }}
              gutterBottom
              fontWeight="1000"
            >
              Building digital.
            </Typography>
            <Typography
              component="h1"
              variant="h3"
              sx={{ display: { xs: "none", md: "block" } }}
              gutterBottom
              fontWeight="1000"
            >
              products & brands.
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              sx={{ display: { xs: "block", md: "none" } }}
              gutterBottom
              fontWeight="1000"
            >
              Building digital.
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              sx={{ display: { xs: "block", md: "none" } }}
              gutterBottom
              fontWeight="1000"
            >
              products & brands.
            </Typography>
            <Typography variant="body1" paragraph>
              This free and open-source landing page template was built using
              the utility classes from Tailwind CSS and based on the components
              from the Flowbite Library and the Blocks System.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" sx={{ bgcolor: '#9333ea' }}>
                30 Days free trail
              </Button>
              <Button variant="text" color="inherit">
                Pricing & FAQ
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: { xs: "none", md: "flex" }, mt: 0 }}
        >
          <Box>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "auto" }}
              image={img1}
              alt="Image"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ p: 0, m: 0 }} spacing={3}>
        {[Airbnb, Google, Microsoft, Spotify, Mailchimp, uber].map(
          (image, index) => (
            <Grid
              key={index}
              item
              xs={6}
              sm={4}
              md={2}
              sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                aspectRatio: "initial",
                color:'grey',
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={`Image ${index + 1}`}
                sx={{
                  height: "auto",
                  width: "70%",
                  objectFit: "contain",
                  opacity: 0.7,
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": { opacity: 1 },
                }}
              />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
}
