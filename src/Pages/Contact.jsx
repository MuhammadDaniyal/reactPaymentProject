import React from 'react'
import Navbar from '../Navbar'
import ContactUs from '../ContactUs'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}

export default Contact