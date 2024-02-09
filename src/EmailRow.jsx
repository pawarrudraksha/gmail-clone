import "./EmailRow.css"
import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectMail } from "./features/mailSlice"

export default function EmailRow({id,title,subject,description,time}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()  
  const openMail=()=>{
    dispatch(selectMail({
        id,title,subject,description,time
    }))
    navigate("/mail")
  }
  return (
    <div className="emailRow" onClick={openMail}>
        <div className="emailRow__options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlined/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlined/> 
            </IconButton>
        </div>
        <h3 className="emailRow__title">
            {title}
        </h3>
        <div className="emailRow__message">
            <h4>{subject} {" "}<span className='emailRow_description'>-{description}</span></h4>
        </div>
        <p className="emailRow__time">
            {time}
        </p>
    </div>
  )
}
