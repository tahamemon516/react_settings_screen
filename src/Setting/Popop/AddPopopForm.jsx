import React from 'react'
import "./Popop.css"

const AddPopopForm = () => {
  return (
    <div className='add-pop-main-cont'>
            <div className='pop-heading'>
                <h1>Add User</h1>
            </div>
        <div className='first-name-last-name-cont'> 
            <div className="add-input">
                <input
                    name="email"
                    placeholder="First Name"
                    type="email"
                    required=""
                />
            </div>
            <div className="add-input">
                <input
                    name="email"
                    placeholder="First Name"
                    type="email"
                    required=""
                />
            </div>
        </div>
        <div className='email-roleAssigned-cont'> 
            <div className="add-input2">
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required=""
                />
            </div>
            <div className="add-input2">
                <input
                    name="email"
                    placeholder="Role Assigned"
                    type="email"
                    required=""
                />
            </div>
        </div>
        <button className='add-pop-btn'>
            Add
        </button>
    </div>
  )
}

export default AddPopopForm
