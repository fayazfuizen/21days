import React from 'react'
import "./SidebarOptions.css"

function SidebarOptions({Icon,title,isactive}) {
  return (
    <div className={`SidebarOptions ${isactive && 'sidebarOptions--active'}`}>
        <Icon/>
        <h6>{title}</h6>
    </div>
  )
}

export default SidebarOptions