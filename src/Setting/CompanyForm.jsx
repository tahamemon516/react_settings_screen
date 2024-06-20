import React from "react";

const CompanyForm = ({form, handleChange}) => {
  return (
    <>
      <div className="hidden-text">
        <span className="settings-bold-text">Current Company Name:</span>
        <span>Tahir Memon</span>
      </div>
      <div className="hidden-input">
        <input
          name="company"
          placeholder="Enter New Company Name"
          type="text"
          value={form.company}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="hidden-input">
        <input
          name="reEnterCompany"
          placeholder="Re-Enter-Company Name"
          type="text"
          value={form.reEnterCompany}
          onChange={handleChange}
          required={true}
        />
      </div>
    </>
  );
};

export default CompanyForm;
