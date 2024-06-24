import React, { useState } from "react";
import "./Setting.css";
import { UserCard, CardLayout, EmailForm, CompanyForm, PasswordForm, ModalLayout, AddForm, DeleteForm } from "./index";
import { USERS } from "../utils/users";

const Setting = () => {
  const [activeCard, setActiveCard] = useState(false);
  const [activeCard2, setActiveCard2] = useState(false);
  const [activeCard3, setActiveCard3] = useState(false);
  const [activeCard4, setActiveCard4] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [users, setUsers] = useState(USERS);
  const [form, setForm] = useState({
    email: "",
    reEnterEmail: "",
    company: "",
    reEnterCompany: "",
    oldPassword: "",
    newPassword: "",
    reEnterNewPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmailCardSubmit = () => {
    if (form.email === form.reEnterEmail) {
      alert("Email Changed Successfully");
      setForm({ ...form, email: "", reEnterEmail: "" });
    } else {
      alert("Emails do not match");
    }
  };

  const handleCompanyCardSubmit = () => {
    if (form.company === "" || form.reEnterCompany === "") {
      alert("Please fill all the fields");
      return;
    } else if (form.company !== form.reEnterCompany) {
      alert("Company Names do not match");
      return;
    }
    alert("Company Name Changed Successfully");
    setForm({ ...form, company: "", reEnterCompany: "" });
  };

  const handlePasswordCardSubmit = () => {
    if (form.oldPassword === "" || form.newPassword === "") {
      alert("Please fill all the fields");
      return;
    } else if (form.oldPassword !== "Tahir12345") {
      alert("Incorrect Old Password");
      return;
    }
    if (form.newPassword !== form.reEnterNewPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password Changed Successfully");
    setForm({ ...form, oldPassword: "", newPassword: "" });
  };

  const handleDeleteAccount = () => {
    setIsDelete(!isDelete);
  };

  return (
    <div>
      <div className="setting-heading-main-container">
        <div className="setting-heading-container">
          <h2 className="setting-heading">Setting</h2>
          <p className="setting-para">
            Make changes on your account & who has access to your subscription
            here!
          </p>
        </div>
      </div>

      <CardLayout
        title={"Change Email"}
        isOpen={activeCard}
        handler={() => setActiveCard(!activeCard)}
        handleSubmit={handleEmailCardSubmit}
      >
        <EmailForm form={form} handleChange={handleChange} />
      </CardLayout>

      <CardLayout
        title={"Change Company Name"}
        isOpen={activeCard2}
        handler={() => setActiveCard2(!activeCard2)}
        handleSubmit={handleCompanyCardSubmit}
      >
        <CompanyForm form={form} handleChange={handleChange} />
      </CardLayout>

      <CardLayout
        title={"Change Password"}
        isOpen={activeCard3}
        handler={() => setActiveCard3(!activeCard3)}
        handleSubmit={handlePasswordCardSubmit}
      >
        <PasswordForm form={form} handleChange={handleChange} />
      </CardLayout>

      <UserCard
        isOpen={activeCard4}
        handler={() => setActiveCard4(!activeCard4)}
        handleAddBtn={() => setIsAdd(!isAdd)}
        users={users}
        setUsers={setUsers}
      />

      <div className="settings-delete-btn-cont">
        <button className="settings-delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>

      {/* Delete Model */}
      <ModalLayout isOpen={isDelete} >
        <DeleteForm onClose={() => setIsDelete(!isDelete)} />
      </ModalLayout>

      {/* Add Model */}
      <ModalLayout isOpen={isAdd} >
        <AddForm 
          onClose={() => setIsAdd(!isAdd)} 
          users={users}
          setUsers={setUsers}  
        />
      </ModalLayout>
    </div>
  );
};

export default Setting;
