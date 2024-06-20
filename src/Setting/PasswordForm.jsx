import React from "react";

const PasswordForm = ({form, handleChange}) => {
  return (
    <>
      <div className="hidden-input">
        <input
          name="oldPassword"
          placeholder="Enter Old Password"
          type="password"
          value={form.oldPassword}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="hidden-input">
        <input
          name="newPassword"
          placeholder="Enter New Password"
          type="password"
          value={form.newPassword}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="hidden-input">
        <input
          name="reEnterNewPassword"
          placeholder="Re-Enter New Password"
          type="password"
          value={form.reEnterNewPassword}
          onChange={handleChange}
          required={true}
        />
      </div>
    </>
  );
};

export default PasswordForm;
