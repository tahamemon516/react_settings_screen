import React, { useState } from "react";
import "./Popop.css";

const AddForm = ({ onClose, users, setUsers, editUser }) => {
  const [form, setForm] = useState({
    firstName: editUser?.user?.firstName || "",
    lastName: editUser?.user?.lastName || "",
    email: editUser?.user?.email || "",
    roleAssigned: editUser?.user?.role || "",
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
    if (editUser?.user) {
      const newUsers = [...users];
      newUsers[editUser.index] = {
        id: editUser.user.id,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        role: form.roleAssigned,
      };
      setUsers(newUsers);
    } else {
      const newUsers = [...users];
      newUsers.push({
        id: newUsers.length + 1,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        role: form.roleAssigned,
      });
      setUsers(newUsers);
    }

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
