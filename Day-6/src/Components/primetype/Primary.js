import React from 'react'
import Emailbody from '../Body/Emailbody';
import EmaiListSetting from '../Body/EmaiListSetting';
import Emailtype from '../Body/Emailtype';

function Primary() {
  return (
    <div className='emailbodydiv'>
      <EmaiListSetting/>
      <Emailtype/>
      
      <Emailbody name='sashikala' subject='this is mail' message='This is a message regarding the react project. it will complete very soon, i will let you know once it completes.' time='04.20PM'/>
       <Emailbody name='krithi' subject='holiday' message='i want a holiday on 12th jan,plese grant a leave in regards with the subject,thanks and best regards.' time='04.20PM'/>
       <Emailbody name='anitha' subject='greeting' message='I wish a very Happy New Year 2023,may you have a great and prosperous year a head.' time='04.20PM'/>
       <Emailbody name='chitti' subject='working days' message='we have 10 more working days in the jan month,we will going to work on react.js.' time='03.10PM'/>
       <Emailbody name='satish' subject='drafts' message='The below attached documet is drafted as per the requirement, please check it,let me know any updates.' time='04.44PM'/>
       <Emailbody name='joel' subject='scheduled meeting' message='The meeting is scheduled for the coming week,please try to attend,please be on time for meet.' time='05.20PM'/>
    
   </div>
  
  )
}

export default Primary