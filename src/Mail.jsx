import "./Mail.css"
import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { selectSelectedMail } from "./features/mailSlice"

export default function Mail() {
  const selectedMail=useSelector(selectSelectedMail)
  const navigate=useNavigate()
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton>
            <ArrowBack onClick={()=>navigate(-1)}/>
          </IconButton>
          <IconButton>
            <MoveToInbox/>
          </IconButton>
          <IconButton>
            <Error/>
          </IconButton>
          <IconButton>
            <Delete/>
          </IconButton>
          <IconButton>
            <Email/>
          </IconButton>
          <IconButton>
            <WatchLater/>
          </IconButton>
          <IconButton>
            <CheckCircle/>
          </IconButton>
          <IconButton>
            <LabelImportant/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore/>  
          </IconButton>
          <IconButton>
            <Print/>
          </IconButton>
          <IconButton>
            <ExitToApp/>
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject} </h2>
          <LabelImportant className="mail__important"/>
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}
