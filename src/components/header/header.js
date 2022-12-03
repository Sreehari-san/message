import React from 'react';
import './Header.css';

const header = ({auth, user}) => {
  return (
    <header>
    <img src="https://img.freepik.com/free-vector/programmer-working-flat-style_52683-15041.jpg?size=338&ext=jpg&ga=GA1.2.1043746885.1669217085&semt=sph" alt="logo" id='logo'/>
     <h2>Dev_Hub</h2>
     {user&& <img src="https://cdn.pixabay.com/photo/2016/09/28/01/36/output-1699614_960_720.png" alt="" onClick={() => auth.signOut()}/>}
    </header>
  )
}

export default header;