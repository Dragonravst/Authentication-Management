import { useState } from 'react'

import './App.css'
import { ToastContainer } from 'react-toastify';
import { Route,Routes } from 'react-router-dom';
import Emailverify from './pages/Emailverify';
import Login from './pages/Login';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';

const App=()=>{
   return(
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
         <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/email-verify" element={<Emailverify/>}/>
      </Routes>

     
    </div>
  );
}
 


export default App
