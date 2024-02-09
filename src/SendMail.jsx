import { Close } from "@material-ui/icons"
import "./SendMail.css"
import React from 'react'
import { Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { closeSendMessage } from "./features/mailSlice"
import { db } from "./firebase"
import {  addDoc, collection, serverTimestamp,  } from "firebase/firestore"

export default function SendMail() {
  const { register, handleSubmit ,formState: { errors }} = useForm({
    defaultValues: {
      to: '',
      subject: '',
      message: '',
      
    }
  });  
  const dispatch=useDispatch()
  const onSubmit = async (formData) => {
    try {
      await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
      });
      dispatch(closeSendMessage());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" onClick={()=>dispatch(closeSendMessage())}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="to" type="email" placeholder="To" {...register("to",{required:true })} />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input name="subject" type="text" placeholder="Subject" {...register("subject",{required:true })} />
        {errors.subject && <p className="sendMail__error">Subject is required</p>}
        <input name="message" type="text" placeholder="Message..."  className="sendMail__message" {...register("message",{required:true })}/>
        {errors.message && <p className="sendMail__error">Message is required</p>}
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}
