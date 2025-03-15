import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios';

const Signup = () => {
    // const [success, setSuccess] = useState('');
    //   const [firstname, setFirstname] = useState('');
    //   const [lastname, setLastname] = useState('');
    //   const [email, setEmail] = useState('');
    //   const [password, setPassword] = useState('');
    //   const [confirmPassword, setConfirmPassword] = useState('');
      const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   try {
      //     const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      //     alert(response.data.message);
      //   } catch (error) {
      //     console.error('Error during signup:', error);
      //     alert('Signup failed. Please try again.');
      //   }
      // };
  return (
<div>
<Header/>
      <div className="topic">
        <h1>SIGNUP</h1>
      </div> 
    <div className="form">
    <div className="signup">
    <h1>SIGNUP</h1><br />
      <form >
        <div className="name">
          <div className="firstname">
            <label htmlFor="firstname">Firstname <span>
              *</span></label><br /><br />
            <input type="text" name="name" onChange={handleChange}  required placeholder='Enter your firstname' id="" />
          </div><br />
          <div className="lastname">
          <label htmlFor="lastname">Lastname <span>
              *</span></label><br /><br />
            <input type="text" name="name" onChange={handleChange}   placeholder='Enter your lastname' id="" required />
          </div>
        </div>
       <div className="email">
       <label htmlFor="email">Enter Email Address <span>*</span></label><br /><br />
        <input type="email" name="email" id="email" placeholder='Enter your email address' onChange={handleChange}  required /><br />
       </div>

       <div className="password">
       <label htmlFor="password">Password <span>*</span></label><br /><br />
        <input type="password" name="password"  placeholder='Enter password'  onChange={handleChange}  required id="password" />
       </div>
       <div className="password">
       <label htmlFor="password">Confirm Password <span>*</span></label><br /><br />
        <input type="password" name="password"  placeholder='Enter confirm password'onChange={handleChange}  required id="password" />
       </div>
       <div className="imageupload">
       <input type="file" name="file" onChange={handleChange} required id="file" /><span>*</span>
       </div>
      <button type="submit" id='sub'>Sign Up</button>
      <div className="link">
     <p>Have an account?</p> <Link to='/login'>Log in</Link>
     </div>
      </form>
    </div>
    </div>
    <Footer/>
</div>
  )
}

export default Signup
