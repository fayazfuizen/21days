import React from 'react'
import "./Body.css"
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Emailtype() {
  return (
    <div className='Emailtype'> 
    <div className='Emailtype__options'>
    <InboxIcon/>
    <p>Primary</p>
    </div>

    <div className='Emailtype__options'>
    <PeopleIcon/>
    <p>Social</p>
    </div>

    <div className='Emailtype__options'>
    <LocalOfferIcon/>
    <p>Promotion</p>
    </div>

    </div>
  )
}

export default Emailtype