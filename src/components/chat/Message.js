import React from 'react'

const Message = ({message, user}) => {
     const {text, uid, photoURL}=message
     const messageClass = uid===user.uid?"sent":"recived";
     return (
    <div className={`message ${messageClass}`}>
     <img src={photoURL || <i class="fa-solid fa-user"></i>} alt="" />
     <p>{text}</p>
    </div>
  )
}

export default Message;