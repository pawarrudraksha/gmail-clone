import { Button } from "@material-ui/core"
import "./Login.css"
import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";


export default function Login() {
  const provider = new GoogleAuthProvider();
  const dispatch=useDispatch()
  const sigin=async()=>{
    signInWithPopup(auth, provider)
    .then(({user}) => {
      console.log(user);
      dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoUrl:user.photoURL
      }))
    }).catch((error) => {
      alert(error.message);
    })
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="gmail logo" />
        <Button variant="contained" color="primary" onClick={sigin}>Login</Button>
      </div>
    </div>
  )
}
