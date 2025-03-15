import React from 'react'
import Header from '../component/Header'
import "./home.css"
import Footer from '../component/Footer'
import Entry from '../component/Entry'
import Headerfo from '../component/EntryHeader'
const Pass = () => {
  return (
    <div>
      <div className="kip">
      <Headerfo/>
      <Entry/>
      </div>
      <Footer/>
    </div>
  )
}

export default Pass
