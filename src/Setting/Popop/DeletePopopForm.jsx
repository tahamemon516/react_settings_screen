import React from 'react'
import "./Popop.css"

const DeletePopopForm = () => {
  return (
    <div className='remove-pop-main-cont'>
            <div className='pop-heading'>
                <h1>
                   Delete Account
                </h1>
            </div>      
        <h3>Are you sure you want to <span>delete</span> your account?</h3>
        <div className="delete-input">
            <input
                name="email"
                placeholder="Type DELETE to comfirm"
                type="email"
                required=""
                />
        </div>
        <button className='remove-pop-btn'>
            Delete Account
        </button>
    </div>
  )
}

export default DeletePopopForm
