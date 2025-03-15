import React, { useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import {auth,provider} from '../Firebase';
import {signInWithPopup} from 'firebase/auth';
import Login from '../routers/Login'
const Headerfo = () => {
  const logout =() =>{
    localStorage.clear()
    window.location.href = '/'
  if(window.location.href=='/'){
    alert('logout successful')
  }
  else{

  }
  }

  const [value,setValue] = useState('')
  const handleClick =() =>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem('email',data.user.email)
      window.location.href = '/';
    
    })
  }

   
  return (
    <div className='header'>
     <div className="crochell">
       <div className="moving">
       <marquee loop ='2'>
       <p>Hello!!Welcome!! Jambo!!   Habari   ya Asubuhi! Habari gani! Selam!!  Ameseginalehu. Dehina nenyi. Akkam. Sannu!</p>
       </marquee>
       </div>
       <div className="nav-station">
            <div className="product">
            <Link id='pass' to= "/">Product</Link>
            </div>
            <div className="product">
            <Link id='pass' to= "/">FAQ</Link>
            </div>
            <div className="product">
            <Link id='pass' to= "/">BLOG</Link>
            </div>
            <Link id='pass' to= "/">product</Link>
            <Link id='pass' to= "/">product</Link>
            {value? Login :<button id='log' onClick={logout}>log out</button>}
       </div>
     </div>
     <div className="notate">
        <div className="logo">
            <Link id='dav' to="/pass">
            <img src="logo.gif" alt="" />
            </Link>
        </div>
        <div className="search">
            <input type="search" placeholder='Search Product' name="" id="" />
            <button className="icon">
                <img src="search.png" alt="" />
            </button>
        </div>
        <div className="loveair">
            <div className="num">
                <p>730 602 626 Dzwoń Pon-Sob 10.00-20.00</p>
            </div>
            <div className="num-icon">
                
                <Link to="/login">
                <div className="userpng">
                <img id='login' title='user' src="user-1.jpg" alt="" />{value}
                </div>
                </Link>
                <img src="shuffle.png" alt="" />
                <img title='cart' src="cart.png" alt="" />

                <p><h2>$</h2><span>0.00</span></p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Headerfo
