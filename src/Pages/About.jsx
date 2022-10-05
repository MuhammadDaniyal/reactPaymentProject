import React from 'react'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import Navbar from '../Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <main className="main-container">
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}

export default About