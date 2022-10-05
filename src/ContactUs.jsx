import React, { useState } from 'react'

const ContactUs = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        message: '',
    })

    let name, value;
    const postUserData = (event) => {
        name = event.target.name // us field ki name attribute
        value = event.target.value // us field py user jo likh rha woh mil gya
        // dynnamicData access [name attr ki value] : value ; value ->jo user input value krrha woh [firstname]:inputValue
        setUserData({ ...userData, [name]: value }) // {...prviousData, updatedData} updated -> jo user inputField ma dal rha value
    }

    // Connect with firebase
    const submitData = async (event) => {
        event.preventDefault()
        const { firstName, lastName, email, phone, address, message } = userData;
        if (firstName && lastName && email && phone && address && message) { // yeh sb fields check hongi data fill bh hua hy ya nh warna alert dekhenga data fill kro sb field check hongi

            const res = await fetch(
                'https://reactfirbaseweb-default-rtdb.firebaseio.com/userDataCollection.json',
                // firebase ma data store krrhy ho uska method or content type btana prta hy issi my
                {
                    method: "POST",
                    Headers: {
                        "Content-Type": "application/json"
                    },
                    // agr server py koe bh data pass krta ho must be woh stringFile string ma hona chyee
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        phone,
                        address,
                        message
                    }),
                }
            )
            if (res) {
                setUserData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    address: '',
                    message: '',
                })
                alert('Successfully! Data Stored')
            } else {
                alert("Invalid! please fill data")
            }
        } else {
            alert("Invalid! please fill data")
        }
    }

    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row mx-auto">
                                <div className="col-12 col-lg-5 contact-leftside">
                                    <h1 className="main-heading fw-bold">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-work-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Deserunt eaque alias similique.
                                    </p>
                                    <figure>
                                        <img
                                            src="./images/hero1.jpg"
                                            alt="contatUsImg"
                                            className="img-fluid"
                                        />
                                    </figure>
                                </div>
                                <div className="col-12 col-lg-7 contact-rightside">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="firstName"
                                                    id=""
                                                    placeholder='FirstName'
                                                    value={userData.firstName}
                                                    onChange={postUserData}
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="lastName"
                                                    id=""
                                                    placeholder='LastName'
                                                    value={userData.lastName}
                                                    onChange={postUserData}
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="email"
                                                    name="email"
                                                    id=""
                                                    placeholder='Email'
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                    className='form-control'
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="phone"
                                                    id=""
                                                    placeholder='Phone Number'
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12 contact-input-field">
                                                <input type="text"
                                                    name="address"
                                                    id=""
                                                    placeholder='Add Address'
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-12">
                                                <input type="text"
                                                    name="message"
                                                    id=""
                                                    placeholder='Enter your Message'
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                    className='form-control'
                                                />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="flexCheckChecked"
                                            />
                                            <label class="form-check-label" className='main-work-para'>
                                                I agree that the thapatechnicalpay may contact me at the
                                                email address or phone number above
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-style w-100 mt-5"
                                            onClick={submitData}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs