import React from 'react'
import "./Sidebar.css"
import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import SidebarOption from './SidebarOption'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

export default function Sidebar() {
  const dispatch=useDispatch()

  return (
    <div className="sidebar">
      <Button startIcon={<Add fontSize='large'/>} className='sidebar__compose' onClick={()=>dispatch(openSendMessage())}>
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true}/>
      <SidebarOption Icon={Star} title="Starred" number={54} selected={false}/>
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} selected={false}/>
      <SidebarOption Icon={LabelImportant} title="Important" number={54} selected={false}/>
      <SidebarOption Icon={NearMe} title="Sent" number={54} selected={false}/>
      <SidebarOption Icon={Note} title="Drafts" number={54} selected={false}/>
      <SidebarOption Icon={ExpandMore} title="More" number={54} selected={false}/>
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person/>
          </IconButton>
          <IconButton>
            <Duo/>
          </IconButton>
          <IconButton>
            <Phone/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}
