import React from 'react'
import "./Body.css"
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function EmaiListSetting() {
  return (
    <div className='Emaillist__settings'>
     <div className='Emaillist__settings_left'>
        <IconButton>
            <CheckBoxOutlineBlankIcon/>
        </IconButton>

        <IconButton>
            <ArrowDropDownIcon />
        </IconButton>

        <IconButton>
            <RefreshIcon/>
        </IconButton>

        <IconButton>
            <MoreVertIcon/>
        </IconButton>
     </div>

     <div className='Emaillist__settings_right'>
        <p>1-50 of 629</p>
        <IconButton>
            <ChevronLeftIcon/>
        </IconButton>
        <IconButton>
            <ChevronRightIcon/>
        </IconButton>

     </div>
        </div>
  )
}

export default EmaiListSetting