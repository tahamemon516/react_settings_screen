import React, { useState } from "react";
import "./Popop.css";

const DeletePopopForm = ({onClose}) => {
  const [deleteInput, setDeleteInput] = useState("");

  const handleChange = (e) => {
    setDeleteInput(e.target.value);
  };

  const handleSubmit = () => {
    if (deleteInput === "DELETE") {
      alert("Account Deleted Successfully");
      onClose();
    } else {
      alert("Please type DELETE to confirm");
    }
  };

  return (
    <div className="remove-pop-main-cont">
      <div className="pop-heading">
        <h1>Delete Account</h1>
      </div>
      <h3>
        Are you sure you want to <span>delete</span> your account?
      </h3>
      <div className="delete-input">
        <input
          name="email"
          placeholder="Type DELETE to comfirm"
          type="email"
          value={deleteInput}
          onChange={handleChange}
        />
      </div>
      <button className="remove-pop-btn" onClick={handleSubmit}>
        Delete Account
      </button>
    </div>
  );
};

export default DeletePopopForm;
