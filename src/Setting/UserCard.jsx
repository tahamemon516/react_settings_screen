import React from "react";
import "./UserCard.css"
import ArrowIcon from "../icons/arrow";

const UserCard = ({ isOpen, handler }) => {
  return (
    <div className="setting-main-card-container">
      <div className="setting-card-container">
        <div className="setting-text-container">
          <span onClick={handler} style={{ cursor: "pointer" }}>
            Secondary User
          </span>
        </div>
        {isOpen ? (
          <div className="add-new-btn">
            <button>Add New</button>
          </div>
        ) : (
          <div className="setting-icon">
            <ArrowIcon handler={handler} />
          </div>
        )}
      </div>
      {isOpen && (
        <div className={`setting-hidden-container`}>
          <div className="container">
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-1">Name</div>
                <div className="col col-2">Email</div>
                <div className="col col-3">Permissions</div>
                <div className="col col-4"></div>
              </li>
              <li className="table-row">
                <div className="col col-1">
                  John Hopkin
                </div>
                <div className="col col-2"></div>
                <div className="col col-3">
                  <div className="col-3-btn">Admin</div>
                </div>
                <div className="col col-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </li>
              <li className="table-row">
                <div className="col col-1">
                  John Doe
                </div>
                <div className="col col-2"></div>
                <div className="col col-3">
                  <div className="col-3-btn">User</div>
                </div>
                <div className="col col-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </li>
              <li className="table-row">
                <div className="col col-1">
                  Zach Dawson
                </div>
                <div className="col col-2"></div>
                <div className="col col-3">
                  <div className="col-3-btn">User</div>
                </div>
                <div className="col col-4">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="user-contact-text">
            "To Add Users in Bulk, Please Contact Us"
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
