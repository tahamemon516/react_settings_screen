import React, { useState } from 'react'
import "./Setting.css";

const Setting = () => {

  const [activeCard, setActiveCard] = useState(false);
  const [activeCard2, setActiveCard2] = useState(false);
  const [activeCard3, setActiveCard3] = useState(false);
  const [activeCard4, setActiveCard4] = useState(false);

  return (
    <div>
        <div className='setting-heading-main-container'>
            <div className='setting-heading-container'>
                <h2 className='setting-heading'>
                    Setting
                </h2>
                <p className='setting-para'>
                    Make changes on your account & who has acesss to your subscription here!
                </p>
            </div>
        </div>

        <div className="setting-main-card-container">
            <div className="setting-card-continer">
                <div className="setting-text-container">
                    <span onClick={()=> setActiveCard(!activeCard)} className="">
                        Change Email
                    </span>
                </div>
                <div className="setting-icon"> 
                    <svg onClick={()=> setActiveCard(!activeCard)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`setting-hidden-container ${activeCard ? "block" : "none"}`}>
                <div className='hidden-text'>
                    <span className=''>Current Email:</span>tahirmemon2022@gmail.com
                </div>
                <div className='hidden-input'>
                    <input
                        placeholder="Enter New Email"
                        required=""
                        type="email"
                    />
                </div>
                <div className='hidden-input'>
                    <input
                        placeholder="Re-Enter-Email"
                        required=""
                        type="email"
                    />
                </div>
                <div className='hidden-btn-main-container'>
                    <div className='discard-btn'>
                        <button>
                            Discard
                        </button>
                    </div>
                    <div className='apply-changes-btn'>
                        <button>
                            Apply Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div className="setting-main-card-container">
            <div className="setting-card-continer">
                <div className="setting-text-container">
                    <span onClick={()=> setActiveCard2(!activeCard2)} className="">
                        Change Company Name
                    </span>
                </div>
                <div className="setting-icon"> 
                    <svg onClick={()=> setActiveCard2(!activeCard2)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`setting-hidden-container ${activeCard2 ? "block" : "none"}`}>
                <div className='hidden-text'>
                    <span className=''>Current Company Name:</span>Tahir Memon
                </div>
                <div className='hidden-input'>
                    <input
                        placeholder="Enter New Company Name"
                        required=""
                        type="email"
                    />
                </div>
                <div className='hidden-input'>
                    <input
                        placeholder="Re-Enter-Company Name"
                        required=""
                        type="email"
                    />
                </div>
                <div className='hidden-btn-main-container'>
                    <div className='discard-btn'>
                        <button>
                            Discard
                        </button>
                    </div>
                    <div className='apply-changes-btn'>
                        <button>
                            Apply Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div className="setting-main-card-container">
            <div className="setting-card-continer">
                <div className="setting-text-container">
                    <span onClick={()=> setActiveCard3(!activeCard3)} className="">
                        Change Password
                    </span>
                </div>
                <div className="setting-icon"> 
                    <svg onClick={()=> setActiveCard3(!activeCard3)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`setting-hidden-container ${activeCard3 ? "block" : "none"}`}>
                <div className='hidden-text'>
                    <span className=''>Current Password:</span>Tahir12345
                </div>
                <div className='hidden-input'>
                    <input
                        placeholder="Enter Old Password"
                        required=""
                        type="password"
                    />
                </div>
                <div className='hidden-input'>
                    <input
                        placeholder="Enter New Password"
                        required=""
                        type="password"
                    />
                </div>
                <div className='hidden-btn-main-container'>
                    <div className='discard-btn'>
                        <button>
                            Discard
                        </button>
                    </div>
                    <div className='apply-changes-btn'>
                        <button>
                            Apply Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="setting-main-card-container">
            <div className="setting-card-continer">
                <div className="setting-text-container">
                    <span onClick={()=> setActiveCard4(!activeCard4)} className="">
                        Secondary User
                    </span>
                </div>
                <div className="setting-icon"> 
                    <svg onClick={()=> setActiveCard4(!activeCard4)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000000" fill="none">
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={`setting-hidden-container ${activeCard4 ? "block" : "none"}`}>
            <div className='secondary-user-container'> 
                <div className='text-btn-container'>
                    <div className="text">
                        <span > Secondary User</span>
                    </div>
                    <div className="add-new-btn">
                        <button>
                            Add New
                        </button>
                    </div>
                </div>
                <div className='main-box-container'>
                    <div className='box1'>
                        <span className='box-name'>Name</span>
                    </div>

                    <div className='box2'>
                        <span className='box-name'>Email</span>
                    </div>

                    <div className='box3'>
                        <span className='box-name'>Permission</span>
                    </div>

                    <div className='box4'>
                        <span className='box-name'>Name</span>
                    </div>
                </div>
                <div className='containers-main-container'>
                    <div className='cont1'>
                        <span className='cont-name'>Jhon Hopkin</span>
                        <span className='cont-name'>Thomas Lee</span>
                        <span className='cont-name'>Zach Dawson</span>
                    </div>

                    <div className='cont2'>

                    </div>

                    <div className='cont3'>
                        <button className='cont-btn'>
                            Admin
                        </button>

                        <button className='cont-btn'>
                            User
                        </button>

                        <button className='cont-btn'>
                            User
                        </button>
                    </div>

                    <div className='cont4'>
                            
                    </div>
                </div> 
            </div>
            </div>
        </div>
s
        <div className='settings-delete-btn-cont'>
            <button className='settings-delete-btn'>
                Delete Account
            </button>
        </div>
    </div>
  )
}

export default Setting
