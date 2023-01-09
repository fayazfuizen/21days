import React from 'react'
import Emailbody from '../Body/Emailbody';
import EmaiListSetting from '../Body/EmaiListSetting';
import Emailtype from '../Body/Emailtype';

function Promotions() {
  return (
    <div className='emailbodydiv'>
      <EmaiListSetting/>
      <Emailtype/>
      
      <Emailbody name='sameer' subject='this is mail' message='This is a message regarding the react project. it will complete very soon, i will let you know once it completes.' time='04.20PM'/>
       <Emailbody name='jhansi' subject='holiday' message='i want a holiday on 12th jan.' time='04.20PM'/>
       <Emailbody name='anitha' subject='greeting' message='I wish a very Happy New Year 2023.' time='04.20PM'/>
       <Emailbody name='nirmal' subject='working days' message='we have 10 more working days in the jan month.' time='03.10PM'/>
       <Emailbody name='sindhu' subject='drafts' message='The below attached documet is drafted as per the requirement, please check it.' time='04.44PM'/>
       <Emailbody name='rini' subject='scheduled meeting' message='The meeting is scheduled for the coming week,please try to attend.' time='05.20PM'/>
    
   </div>
  
  )
}

export default Promotions