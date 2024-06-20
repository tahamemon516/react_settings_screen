import React from "react";

const EmailForm = ({form, handleChange}) => {
  return (
    <>
      <div className="hidden-text">
        <span className="settings-bold-text">Current Email:</span>
        <span>tahirmemon2022@gmail.com</span>
      </div>
      <div className="hidden-input">
        <input
          name="email"
          placeholder="Enter New Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="hidden-input">
        <input
          name="reEnterEmail"
          placeholder="Re-Enter-Email"
          type="email"
          value={form.reEnterEmail}
          onChange={handleChange}
          required={true}
        />
      </div>
    </>
  );
};

export default EmailForm;
