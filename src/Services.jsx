import React, { useState } from 'react'
import serviceapi from './API/servicesApi'

const Services = () => {
    const [serviceData, setServiceData] = useState(serviceapi)
    return (
        <>
            <section className='service-main-container'>
                <div className="container service-container">
                    <h1 className='main-heading text-center fw-bolder'>How to send money?</h1>
                    <div className='row'>
                        {
                            serviceData.map((currElem) => {
                                const { id, logo, title, info } = currElem;
                                return (
                                    <>
                                        <div className='col-11 col-lg-4 col-xxl-4 work-container-subdiv' key={id}>
                                            <i className={`fontawesome-style ${logo}`}></i>
                                            <h2 className="sub-heading">{title}</h2>
                                            <p className='main-work-para'>
                                                {info}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services