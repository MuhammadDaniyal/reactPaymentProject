import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Services from '../Services'

const Service = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default Service