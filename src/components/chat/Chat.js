import React, {useState, useRef} from 'react'
import './chat.css'
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import {useCollectionData} from "react-firebase-hooks/firestore"
import Message from './Message'

const Chat = ({user}) => {
     const [message, setMessage]=useState("")
     const dummy = useRef()
     const firestore = firebase.firestore();
     const messagesRef=firestore.collection("messages")
     const query = messagesRef.orderBy("createdAt").limit(25)
     const [messages] = useCollectionData(query, {idField: "id"})
     const sendMessage =async (e) => {
          e.preventDefault();
          const {uid, photoURL}=user
          await messagesRef.add({
               text: message,
               createdAt: firebase.firestore.FieldValue.serverTimestamp(),
               uid, photoURL
          })
          setMessage("")
          dummy.current.scrollIntoView({behavior:"smooth"})
     }
  return (
     <>
     <div className='chat-window'>
          { messages
          &&messages.map((msg) => <Message key={msg.id} message={msg} user={user} />) }
     <span ref={
          dummy
     }></span>
     </div>
     <form onSubmit={sendMessage}>
          <input value={message}
           onChange={(e)=>setMessage(e.target.value)}
           placeholder="Type here"
          />
          <button>
          <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
     </form>
    </>
  )
}

export default Chat