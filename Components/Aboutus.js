import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';

export default function Aboutus() {
  return (
    <Box component="section" sx={{ px: { xs: 3, md: 6 }, py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0d3f77', mb: 1 }}>
        About
      </Typography>
      <Box sx={{ width: 72, height: 6, bgcolor: '#0d3f77', borderRadius: 3, mb: 4 }} />

      <Typography variant="h6" sx={{ color: '#25364a', fontWeight: 400, lineHeight: 1.7, mb: 4 }}>
        As a creative and quick-thinking individual with a penchant for online communication and relationship-building, I possess the ability to apply modern paradigms to construct highly scalable and performant systems. With over two years of industry experience managing client projects and more than four years of freelance experience designing and developing web applications for numerous clients, I bring a comprehensive skill set to the table.
      </Typography>

      <Typography variant="h6" sx={{ color: '#25364a', fontWeight: 400, lineHeight: 1.7, mb: 6 }}>
        Armed with a Bachelor's degree in computer science, my passion for web development and digital marketing runs deep. I pride myself on being highly adaptable and agile, ready to tackle any challenge that comes my way.
      </Typography>

      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0d3f77', mb: 3 }}>
            Web Developer & Mobile Developer
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <AboutItem label="Birthday" value="20 Aug 2007" />
              <AboutItem label="Phone" value="+91 74832 56659" />
              <AboutItem label="City" value="Bangalore, India" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <AboutItem label="Age" value="18" />
              <AboutItem label="Degree" value="B.Tech, CSE" />
              <AboutItem label="Freelance" value="Available" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography
              component="span"
              role="img"
              aria-label="laptop"
              sx={{ fontSize: { xs: 140, sm: 200 }, filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.12))' }}
            >
              💻
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function AboutItem({ label, value }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', py: 1 }}>
      <CheckIcon sx={{ color: '#0d9bff' }} />
      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#233142' }}>
        {label}:
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#233142' }}>{value}</Typography>
    </Stack>
  );
}


