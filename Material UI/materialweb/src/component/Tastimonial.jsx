import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tastimonial = () => {
  const settings = {
    dots: true,
    loop:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box component="section" sx={{ backgroundColor: 'white', py: 8 }}>
      <Container maxWidth="xl" sx={{ px: 4 }}>
        <Slider {...settings}>
          <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width:{md:'50%'},mx:'auto'}}>
              <FormatQuoteIcon sx={{ fontSize: 48, mb: 1, color: '#9CA3AF', light: { color: 'white' } }} />
              <Typography variant="body1" sx={{ mb: 2, color: 'black', fontSize: 24  }}>
                "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" sx={{ width: 28, height: 28, mr: 2 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'black', display: 'flex', light: { color: 'white' } }}>Michael Gough |</Typography>
                  <Typography variant="body2" sx={{ color: '#6B7280', ml: 2, light: { color: 'white' } }}>CEO at Google</Typography>
                </Box>
              </Box>
            </Box>
          </div>
          <div>
            {/* Add content for the second slide here */}
            <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',width:{md:'50%'},mx:'auto'}}>
              <FormatQuoteIcon sx={{ fontSize: 48, mb: 1, color: '#9CA3AF', light: { color: 'white' } }} />
              <Typography variant="body1" sx={{ mb: 2, color: 'black', fontSize: 24 }}>
                "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" sx={{ width: 28, height: 28, mr: 2 }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'black', display: 'flex', light: { color: 'white' } }}>Michael Gough |</Typography>
                  <Typography variant="body2" sx={{ color: '#6B7280', ml: 2, light: { color: 'white' } }}>CEO at Google</Typography>
                </Box>
              </Box>
            </Box>
          </div>
          </div>

          <div>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',width:'50%',mx:'auto'}}>
            <FormatQuoteIcon sx={{ fontSize: 48, mb: 1, color: '#9CA3AF', light: { color: 'white' } }} />
            <Typography variant="body1" sx={{ mb: 2, color: 'black', fontSize: 24 }}>
              "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Avatar src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" sx={{ width: 28, height: 28, mr: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'black', display: 'flex', light: { color: 'white' } }}>Michael Gough |</Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', ml: 2, light: { color: 'white' } }}>CEO at Google</Typography>
              </Box>
            </Box>
          </Box>
        </div>
        
          {/* Add more slides here if needed */}
        </Slider>
      </Container>
    </Box>
  );
}

export default Tastimonial;
