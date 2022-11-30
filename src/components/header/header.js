import React from 'react';
import './Header.css';

const header = ({auth, user}) => {
  return (
    <header>
     <img src="https://cdn.pixabay.com/photo/2017/06/02/17/47/friendship-2366955_960_720.jpg" alt="logo" id='logo'/>
     {user&& <img src="https://cdn.pixabay.com/photo/2016/09/28/01/36/output-1699614_960_720.png" alt="" onClick={() => auth.signOut()}/>}
    </header>
  )
}

export default header;