import React from "react";
import ArrowIcon from "../icons/arrow";

const CardLayout = ({ isOpen, handler, handleSubmit, title, children }) => {
  return (
    <div className="setting-main-card-container">
      <div className="setting-card-container">
        <div className="setting-text-container">
          <span onClick={handler} style={{ cursor: "pointer" }}>
            {title}
          </span>
        </div>
        <div className="setting-icon">
          {!isOpen && <ArrowIcon handler={handler} />}
        </div>
      </div>
      {isOpen && (
        <div className={`setting-hidden-container`}>
          {children}
          <div className="hidden-btn-main-container">
            <div className="discard-btn">
              <button onClick={handler}>Discard</button>
            </div>
            <div className="apply-changes-btn">
              <button onClick={handleSubmit}>Apply Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
