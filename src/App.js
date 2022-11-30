import React from 'react';
import Header from './components/header/header';
import './index.css';
import Chat from './components/chat/Chat';
import SignIn from './components/signIn/signin';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
firebase.initializeApp ({
  apiKey: "AIzaSyCgafRCCcWDbFVXddMeX6XtEvLfVuj7w0A",
  authDomain: "v-chat-f2b7f.firebaseapp.com",
  projectId: "v-chat-f2b7f",
  storageBucket: "v-chat-f2b7f.appspot.com",
  messagingSenderId: "354897923060",
  appId: "1:354897923060:web:07d3e6222ae16c025e47a1",
  measurementId: "G-ZZJQMX7XEQ"
});
const auth = firebase.auth()
function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Header auth={auth} user={user}/>
      <section>{user ? <Chat user={user}/>:<SignIn auth={auth}/>}</section>
    </div>
  );
}

export default App;
