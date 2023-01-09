import React from 'react'
import Emailbody from '../Body/Emailbody';
import EmaiListSetting from '../Body/EmaiListSetting';
import Emailtype from '../Body/Emailtype';

function Social() {
  return (
    <div className='emailbodydiv'>
      <EmaiListSetting/>
      <Emailtype/>
      
      <Emailbody name='Raja' subject='this is mail' message='The Beginning is a 2015 Indian epic action film co-written and directed by S. S. Rajamouli .' time='04.20PM'/>
       <Emailbody name='Sreasty' subject='holiday' message='RRR is an acronym for "Roudram Ranam Rudhiram," which can be roughly translated from Telugu launguage.' time='04.20PM'/>
       <Emailbody name='shishir' subject='greeting' message='I wish a very Happy New Year 2023,hope you are doing well and i wish a great year a head.' time='04.20PM'/>
       <Emailbody name='pragathi' subject='working days' message='we have 10 more working days in the jan month,i have to work on react functional components by the end.' time='03.10PM'/>
       <Emailbody name='rani' subject='drafts' message='The below attached documet is drafted as per the requirement, please check it,let me know if any updates.' time='04.44PM'/>
       <Emailbody name='shristy' subject='scheduled meeting' message='The meeting is scheduled for the coming week,please try to attend,please try to be there on time.' time='05.20PM'/>
    
   </div>
  
  )
}

export default Social