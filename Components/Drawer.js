import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navItems = [
  { label: 'Home', icon: <HomeOutlinedIcon />, href: '#home' },
  { label: 'About', icon: <PersonOutlinedIcon />, href: '#about' },
  { label: 'Resume', icon: <DescriptionOutlinedIcon />, href: '#resume' },
  { label: 'Portfolio', icon: <MovieFilterOutlinedIcon />, href: '#portfolio' },
  { label: 'Services', icon: <MiscellaneousServicesOutlinedIcon />, href: '#services' },
];

const socialItems = [
  { label: 'X', icon: <XIcon fontSize="small" />, href: 'https://x.com/' },
  { label: 'Facebook', icon: <FacebookOutlinedIcon fontSize="small" />, href: 'https://facebook.com/' },
  { label: 'Instagram', icon: <InstagramIcon fontSize="small" />, href: 'https://instagram.com/' },
  { label: 'GitHub', icon: <GitHubIcon fontSize="small" />, href: 'https://github.com/' },
  { label: 'LinkedIn', icon: <LinkedInIcon fontSize="small" />, href: 'https://linkedin.com/' },
];

export default function Drawer({ open = true, onClose, width = 360, name = 'Shreyas B Bhat', avatarSrc }) {
  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width,
          bgcolor: '#0f1821',
          color: '#e8f0f7',
          borderRight: 'none',
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <Stack spacing={2} alignItems="center">
          <Avatar
            alt={name}
            src={avatarSrc}
            sx={{ width: 140, height: 140, border: '6px solid #233142' }}
          />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            {socialItems.map((item) => (
              <IconButton
                key={item.label}
                size="small"
                component="a"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  bgcolor: '#182330',
                  color: '#c7d3e0',
                  '&:hover': { bgcolor: '#1e2a39', color: '#48a8ff' },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Box>

      <Divider sx={{ borderColor: '#1e2a39' }} />

      <List sx={{ p: 2 }}>
        {navItems.map((item) => (
          <ListItem disablePadding key={item.label}>
            <ListItemButton component="a" href={item.href} sx={{ borderRadius: 1, '&:hover': { bgcolor: '#16202b' } }}>
              <ListItemIcon sx={{ color: '#48a8ff', minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 18 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ p: 3 }}>
        <Typography variant="body2" sx={{ color: '#9fb0c0' }}>
          Designed by{' '}
          <Typography component="a" href="#" sx={{ color: '#48a8ff', textDecoration: 'none' }}>
            {name}
          </Typography>
        </Typography>
      </Box>
    </MuiDrawer>
  );
}



