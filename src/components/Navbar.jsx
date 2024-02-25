/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, NavLink } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import Topbar from './Topbar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }} className='flex items-center justify-between gap-4'>
        <img className=' h-20 object-cover' src="https://res.cloudinary.com/pitz/image/upload/v1707233859/WhatsApp_Image_2024-02-06_at_17.00.20-removebg-preview_rpte6g.png" alt="" />
        <ArrowBack />
      </Typography>
      <Divider />
      <List className='flex flex-col gap-4'>
        <NavLink activeClassName='active' to='/' className='text-black'>Home</NavLink>
        <NavLink activeClassName='active' to='/about' className='text-black'>About</NavLink>
        <NavLink activeClassName='active' to='/home-care' className='text-white'>Home Care</NavLink>
          <NavLink activeClassName='active' to='/complex' className='text-white'>Complex care</NavLink>
        <NavLink activeClassName='active' to='/contact' className='text-black'>Contact</NavLink>
        <NavLink activeClassName='active' to='/services' className='text-black'>Services</NavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className=' h-20'>
   
      {/* <CssBaseline /> */}
      <AppBar className='bg-slate-200 navbar' component="nav">
      <Topbar/>
      {/* hhhjhkhhhhhjjh */}
      <div className="mt-3">
              <hr />

      </div>
        <Toolbar className='text-white flex  justify-between w-full '
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >     
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
          >
            <img className=' h-24 object-cover' src="https://res.cloudinary.com/pitz/image/upload/v1707233859/WhatsApp_Image_2024-02-06_at_17.00.20-removebg-preview_rpte6g.png" alt="" />
          </Typography>
          <Box className='links' sx={{ display: 'flex ', gap: '2rem' }}>
          <NavLink activeClassName='active' to='/' className='text-white'>Home</NavLink>
          <NavLink activeClassName='active' to='/home-care' className='text-white'>Home Care</NavLink>
          <NavLink activeClassName='active' to='/complex' className='text-white'>Complex care</NavLink>
            <NavLink activeClassName='active' to='/about' className='text-white'>About</NavLink>
            <NavLink activeClassName='active' to='/services' className='text-white'>Services</NavLink>
            <NavLink activeClassName='active' to='/contact' className='text-white'>Contact</NavLink>

          </Box>
          <Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>  </Box>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>

        </Typography>
      </Box>
    </div>
  );
}
