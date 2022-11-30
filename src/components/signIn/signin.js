import React from 'react';
import './signIn.css';
import firebase from 'firebase/compat/app';
const signIn = ({auth}) => {
     const signInWithGoogle = e => {
          e.preventDefault()
          const provider = new firebase.auth.GoogleAuthProvider()
          auth.signInWithPopup(provider)
     }
  return (
    <div id='signIn'>
     <br /><br />
     <p>SignIn to chat</p>
     <br />
     <button className='signIn-btn' onClick={signInWithGoogle}>
     <img src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004__340.png" alt="google" id='signin-logo' />
     <span>Sign In with google</span>
     </button>
    </div>
  )
}
export default signIn;
