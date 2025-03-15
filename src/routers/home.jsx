import React from 'react'
import Header from '../component/Header'
import "./home.css"
import Main from '../component/Main'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div>
      <div className="kip">
      <Header/>
      <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
