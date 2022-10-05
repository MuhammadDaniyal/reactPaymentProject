import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import Header from './Header'
import HowitWork from './HowitWork'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'
import Footer from './Footer'

// HomePage islya ky koe URL py likh ky compononet call na krwae Navbar Header etc,, URl py specific chezz likhta page kalya woh kaam App.jsx py hogi
// bs yehe aik single page hoga jo single page website khelati yehe compnonet ab call honga

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Header />
        <HowitWork />
        <AboutUs />
        <Services />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}

export default Home