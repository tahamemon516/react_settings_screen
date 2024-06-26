import React from "react";
import "./Popop.css";

const PopopLayout = ({ isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="pop-iner-cont">
            <div className="pop-card-cont">
              <div className="">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopopLayout;
