import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import {useState,useEffect} from 'react'
import Login from "./components/Login";
import {useStateValue} from './components/StateProvider.js'


function App() {

  //const [user,setUser]=useState(null)

  const [{user},dispatch]=useStateValue();

  return (
    <div className="app">
      {!user ?(
        <Login/>
      ):(
    <div className="app__body">
       <Router>
            <Sidebar/>
         <Switch>
           <Route path='/room/:roomId'>
            <Chat/>
           </Route>

           <Route path='/'>
             <Chat/>
           </Route>

         </Switch>
       </Router>
     </div>
      )}
     
    </div>
  );
}

export default App;
