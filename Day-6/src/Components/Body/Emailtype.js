import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from 'react-router-dom';
function Emailtype() {
  return (
    <div className='Emailtype'> 
    <div className='Emailtype__options'>
    <InboxIcon/>
    <Link to='/Primary'><p>Primary</p></Link>
    </div>

    <div className='Emailtype__options'>
    <PeopleIcon/>
    <Link to='/Social'><p>Social</p></Link>
    </div>

    <div className='Emailtype__options'>
    <LocalOfferIcon/>
    <Link to='/Promotions'><p>Promotion</p></Link>
    </div>

    </div>
  )
}

export default Emailtype