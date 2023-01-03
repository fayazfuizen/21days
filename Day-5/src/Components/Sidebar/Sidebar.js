import React from 'react'
import "./Sidebar.css"
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Sidebar() {
  return (
    <div className='Sidebar'>
      <Button startIcon={<AddIcon/>} className='compose__btn'>compose</Button>

      <SidebarOptions Icon={InboxIcon} title="Inbox" isactive={true}/>
      <SidebarOptions Icon={StarPurple500Icon} title="Starred" isactive={true}/>
      <SidebarOptions Icon={WatchLaterIcon} title="Snoozed"/>
      <SidebarOptions Icon={ SendIcon} title="Sent"/>
      <SidebarOptions Icon={DraftsIcon} title="Drafts"/>
      <SidebarOptions Icon={LabelImportantIcon} title="Important"/>
      <SidebarOptions Icon={ScheduleSendIcon} title="Scheduled"/>
      <SidebarOptions Icon={MailOutlineIcon} title="All mail"/>
      <SidebarOptions Icon={ReportGmailerrorredIcon} title="Spam"/>
      <SidebarOptions Icon={DeleteOutlineIcon} title="Trash"/>


    </div>

  
  )
}

export default Sidebar
