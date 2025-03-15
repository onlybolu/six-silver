import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import "./login.css"
import { Link } from 'react-router-dom'
import {auth,provider} from '../Firebase';
import {signInWithPopup} from 'firebase/auth';
import Home from './home'
import axios from 'axios';
const Login = () => {
  
  const [value,setValue] = useState('')
  const handleClick =(e) =>{
    e.preventDefault();
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem('email',data.user.email)
      window.location.href = '/pass'
    })
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
    
  })
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
  //     alert(response.data.message);
  //     // Store token in local storage or state management
  //     localStorage.setItem('token', response.data.token);
  //     window.location.href='/'
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     alert('Login failed. Please check your credentials.');
  //   }
  // };
  return (
    <div>
      <Header/>
      <div className="topic">
        <h1>LOGIN</h1>
      </div>
    <div className="form">
    <div className="login" >
      <h1>LOGIN</h1><br />
      <form >
       <div className="email">
       <label htmlFor="email">Enter Email Address <span>*</span></label><br /><br />
        <input type="email" name="email" id="email" placeholder='Enter your email address' onChange={handleChange} required /><br />
       </div>

       <div className="password">
       <label htmlFor="password">Password <span>*</span></label><br /><br />
        <input type="password" name="password" onChange={handleChange}placeholder='Enter password' required id="password" />
       </div>
      <button type="submit" id='sub'>Login</button>
      <div className="or">
        <p>OR</p>
      </div>
      
      <button id='google' onClick={handleClick} ><img src="google.webp" alt="" />Sign in with Google </button>
     <div className="link">
     <p>Don't have an account?</p> <Link to='/signup'>Sign up</Link>
     </div>
     
      </form>
    </div>
    
    </div>
      <Footer/>
    </div>
  )
}

export default Login

