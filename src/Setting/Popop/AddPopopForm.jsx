import React, { useState } from "react";
import "./Popop.css";

const AddForm = ({ onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roleAssigned: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.email === "" ||
      form.roleAssigned === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    alert("User Added Successfully");
    setForm({
      ...form,
      firstName: "",
      lastName: "",
      email: "",
      roleAssigned: "",
    });
    onClose();
  };

  return (
    <div className="add-pop-main-cont">
      <div className="pop-heading">
        <h1>Add User</h1>
      </div>
      <div className="first-name-last-name-cont">
        <div className="add-input">
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="add-input">
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="email-roleAssigned-cont">
        <div className="add-input2">
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="add-input2">
          <input
            name="roleAssigned"
            placeholder="Role Assigned"
            type="text"
            value={form.roleAssigned}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="add-pop-btn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddForm;
