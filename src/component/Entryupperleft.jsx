import React from 'react'
import "./upperleft.css"
import { Link } from 'react-router-dom'


const Entryupperleft = () => {
  return (
        <div className="upperleft">
            <div className="categories">
              <img src="menu.png" alt="" />
              <p>Categories</p>
            </div>
            <Link id='dav' to="/entrybracelet">
            <div className="dropdown">
              <img src="bracelets.png" alt="" />
              <p>Bracelets</p>
            </div>
            </Link>
            <Link id='dav' to= "/necklace">
            <div className="dropdown">
              <img src="necklace.png" alt="" />
              <p>Necklaces</p>
            </div>
            </Link>
            <Link id='dav' to="/rings">
            <div className="dropdown">
              <img src="rings.png" alt="" />
              <p>Rings</p>
            </div>
            </Link>
            <Link id='dav' to="/earrings">
            <div className="dropdown">
              <img src="earring.png" alt="" />
              <p>Earrings</p>
            </div>
            </Link>
           <Link id='dav' to="/pendant">
           <div className="dropdown">
              <img src="pendant.png" alt="" />
              <p>Pendants</p>
            </div>
           </Link>
           <Link id='dav' to="/sunglasses">
           <div className="dropdown">
              <img src="glasses.png" alt="" />
              <p>Sunglasses</p>
            </div>
           </Link>
           <Link id='dav' to='/watches'>
           <div className="dropdown">
              <img src="watch.png" alt="" />
              <p>WristWatch</p>
            </div>
           </Link>
            <Link id='dav' to='/brooches'><div className="dropdown">
              <img src="brooches.png" alt="" />
              <p>Brooches</p>
            </div>
            </Link>
           <Link id='dav' to='/wigs'> <div className="dropdown">
              <img src="wig.png" alt="" />
              <p>Wigs</p>
            </div>
            </Link>
            <div className="dropdown">
              <img src="headband.png" alt="" />
              <p>Headbands</p>
            </div>
        </div>
  )
}

export default Entryupperleft
