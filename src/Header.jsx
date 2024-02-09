import React from 'react'
import "./Header.css"
import { Apps, ArrowDropDown, Menu, Notifications, Search } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

export default function Header() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser)
  const signOut=()=>{
    auth.signOut().then(()=>{ 
      dispatch(logout())
    })
  }
  return (
    <div className="header">
        <div className="header__left"> 
        <IconButton>
          <Menu />
        </IconButton>
        <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'/>
        </div>
        <div className="header__middle">
          <Search/>
          <input type="text"  placeholder='Search mail'/>
          <ArrowDropDown className='header__inputCaret'/>
        </div>
        <div className="header__right">
          <IconButton>
            <Apps/>
          </IconButton>
          <IconButton>
            <Notifications/>
          </IconButton>
          <Avatar src={user.photoUrl} onClick={signOut}/>
        </div>
    </div>
  )
}
