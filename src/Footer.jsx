import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='f-footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-4 mx-auto col1">
                                    <div className=" text-center">

                                        <h2 className=' text-center mb-4'>Content</h2>
                                        <ul style={{ paddingLeft: 0 }}>
                                            <li>
                                                <a href="http://daniyblog.surge.sh/" target="_blank">DaniyBlogs</a>
                                            </li>
                                            <li>
                                                <a href="http://DaniyWeatherApp.surge.sh" target="_blank">WeatherApp</a>
                                            </li>
                                            <li>
                                                <a href="http://fir-job-portal-3ec54.web.app" target="_blank">JobPortal</a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">About</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-4 mx-auto col2">
                                    <h2>Follow Us</h2>
                                    <div className="row mt-5">
                                        <div className="col-3 mx-auto">
                                            <a
                                                className='text-decoration-none'
                                                href="https://www.facebook.com/Daniyal.Sheikh36/"
                                                target="_blank">
                                                <i class="fab fa-facebook-f fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a
                                                className='text-decoration-none'
                                                href="https://www.instagram.com/daniyal._shiekh36/?hl=en"
                                                target="_blank">
                                                <i class="fab fa-instagram fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a
                                                className='text-decoration-none'
                                                href="https://www.linkedin.com/in/daniyal-shiekh-3b660922a/"
                                                target="_blank">
                                                <i class="fab fa-linkedin fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a
                                                className='text-decoration-none'
                                                href="https://twitter.com/daniy_shiekh36"
                                                target="_blank">
                                                <i class="fab fa-twitter fontawesome-style"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-4 mx-auto col3">
                                    <h2>Contact Us</h2>
                                    <p className='col3-para mt-3'>
                                        <i className="bi bi-telephone pe-2"></i> +92315-895-112-5<br />
                                        <i className="bi bi-envelope pe-2"></i> daniyalshiekh166@gmail.com<br />
                                        <i className="bi bi-globe pe-2"></i> DaniyPay.surge.sh<br />
                                        <i className="bi bi-geo-alt pe-2"></i> Main University Rd, NED University Of Engineering & Technology, Karachi,
                                        Karachi City, Sindh 75270

                                    </p>
                                </div>

                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">
                                    Copyright @ 2022 DaniyPay. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer