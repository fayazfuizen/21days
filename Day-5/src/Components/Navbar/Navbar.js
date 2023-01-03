

import React from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton,Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar__left'>
      <IconButton>
      <MenuIcon />
      </IconButton>
      <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'/>
      </div>

      <div className='Navbar__middle'>
        <div className='Navbar__search'>
      <IconButton>
      <SearchIcon />
      </IconButton>
      <input type="text"  placeholder='Search in mail' />
      <IconButton>
      <ExpandMoreIcon />
      </IconButton>
      </div>
      </div>

      <div className='Navbar__right'>
      <IconButton>
      <HelpOutlineIcon />
      </IconButton>

      <IconButton>
      <SettingsIcon />
      </IconButton>

      <IconButton>
      <AppsIcon />
      </IconButton>

      <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLy5GwgUcDVAvJ2pkNrP9JgojkXE6FmqvxA&usqp=CAU'></Avatar>
      </div>

    </div>
  )
}

export default Navbar