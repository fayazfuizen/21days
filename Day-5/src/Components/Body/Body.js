import React, { useEffect, useState } from 'react'
import "./Body.css"
import Emailtype from './Emailtype'
import EmaiListSetting from './EmaiListSetting'
import Emailbody from './Emailbody'
function Body() {
    const[count,setcount]=useState(0);
    useEffect(()=>{
        document.title=`${count}`
    });
  return (
    <div className='Email__body'>
       <EmaiListSetting/> 
       <Emailtype/>
       <Emailbody name='sajid' subject='this is mail' message='This is a message regarding the react project. it will complete very soon, i will let you know once it completes.' time='04.20PM'/>
       <Emailbody name='fayaz' subject='holiday' message='i want a holiday on 12th jan.' time='01.30PM'/>
       <Emailbody name='anil' subject='greeting' message='I wish a very Happy New Year 2023.' time='02.20PM'/>
       <Emailbody name='harish' subject='working days' message='we have 10 more working days in the jan month.' time='03.10PM'/>
       <Emailbody name='satish' subject='drafts' message='The below attached documet is drafted as per the requirement, please check it.' time='04.44PM'/>
       <Emailbody name='joel' subject='scheduled meeting' message='The meeting is scheduled for the coming week,please try to attend.' time='05.20PM'/>


        </div>
  )
}

export default Body