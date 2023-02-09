import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon  from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon  from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import SearchIcon  from '@mui/icons-material/Search';


const TopBar = () => {
  const theme = useTheme(); // grab from material UI, does in react context but material ui so we have access to their theme provided
  const colors = tokens(theme.palette.mode); // anytime that we want to use the color mode that is in material UI we can grab it from useTheme, and we can pass it in the tokens theme we created in our other file. so every time we want to use a color it will determine which color we want based on light vs dark mode
  const colorMode = useContext(ColorModeContext); // allow us to toggle different states for the color mode
  return (

  )
}

export default TopBar