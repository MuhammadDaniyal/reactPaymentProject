import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className='col-12 col-lg-6 col-md-6 col-sm-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
                            <h1 className="display-3">
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                                qs quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                                officiis tempora recusandae voluptate quam
                            </p>
                            <h3>Get early access for you</h3>
                            <div className='input-group mt-3'>
                                <input 
                                    type="text"
                                    className='rounded-pill me-3 w-50 w-lg-75 p-3 form-control-text' 
                                    placeholder='Enter your Email' />
                                <div className='input-group-button'> Get it now</div>
                            </div>
                        </div>
                        {/*  --------------- main header right side--------------  */}
                        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first'>
                            <img 
                                src="./images/hero1.jpg" 
                                alt="" className='img-fluid main-hero-img1' />
                            <img
                                src="./images/hero4.jpg" 
                                alt="" className='img-fluid main-hero-img2' />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header