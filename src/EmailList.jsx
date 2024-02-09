import "./EmailList.css"
import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import Section from "./Section"
import EmailRow from "./EmailRow"
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "./firebase"

export default function EmailList() {
  const [emails,setEmails]=useState([])  
  useEffect(()=>{
    const q = query(collection(db, "emails"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const mails = [];
    querySnapshot.forEach((doc) => {
        mails.push({
            id:doc.id,
            data:doc.data()
        });
    });
    setEmails(mails)
    });
    return () => unsubscribe(); 
  },[])
    
  return (
    <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeft/>
                </IconButton>
                <IconButton>
                    <ChevronRight/>
                </IconButton>
                <IconButton>
                    <KeyboardHide/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={Inbox} title="Primary" color="red" selected/>
            <Section Icon={People} title="Social" color="#1A73E8" />
            <Section Icon={LocalOffer} title="Promotions" color="green"   />
        </div>
        <div className="emailList__list">
            {emails && emails.map(({id,data})=>(
                <EmailRow
                title={data.to}
                subject={data.subject}
                description={data.message}
                time={new Date(data.timestamp?.seconds*1000).toUTCString()}
                key={id}
                />
            ))
        }
        </div>
    </div>
  )
}
