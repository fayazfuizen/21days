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
// import Compose from '../Compose/Compose';
import {Link} from 'react-router-dom';
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LockClockIcon from "@mui/icons-material/LockClock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from 'react';

function Sidebar() {
const [comp,setComp]= useState(false)
const compHandler = ()=> {
  setComp(!comp)
}
  
  return (
    <div className='Sidebar'>
     <Button onClick={compHandler} startIcon={<AddIcon/>} className='compose__btn'>compose</Button>
      {comp?<div className="compose">
      <div className="compose__header">
        <div className="compose__header_left">
          <span>New Message</span>
        </div>

        <div className="compose__header_right">
          <RemoveOutlinedIcon />
          <HeightIcon />
          <CloseIcon onClick={compHandler}/>
        </div>
      </div>

      <div className="compose__body">
        <div className="compose__bodyForm">
          <input type="Email" placeholder="Recipients" />
          <input type="text" placeholder="Subject" />
          <textarea rows="20"></textarea>
        </div>
      </div>

      <div className="compose__footer">
        <div className="compose__footer_left">
          <button type="submit">
            send <ArrowDropDownIcon />
          </button>
        </div>

        <div className="compose__footer_right">
          <FormatColorTextIcon />
          <AttachFileIcon />
          <LinkIcon />
          <InsertEmoticonIcon />
          <AddToDriveIcon />
          <InsertPhotoIcon />
          <LockClockIcon />
          <CreateIcon />
          <MoreVertIcon />
          <DeleteOutlineIcon />
        </div>
      </div>
    </div> :null}
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
