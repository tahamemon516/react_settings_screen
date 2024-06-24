import React from "react";
import "./UserCard.css";
import {ArrowIcon, StarIcon} from "../icons";
import { USERS } from '../utils/users';

const UserCard = ({ isOpen, handler, handleAddBtn }) => {
  return (
    <div className="setting-main-card-container">
      <div className="setting-card-container">
        <div className="setting-text-container">
          <span onClick={handler} style={{ cursor: "pointer" }}>
            Secondary User
          </span>
        </div>
        {isOpen ? (
          <div className="add-new-btn" onClick={handleAddBtn}>
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
              {USERS && USERS?.map((user, index) => (
                <li className="table-row" key={user.id}>
                <div className="col col-1">{user.firstName} {user.lastName}</div>
                <div className="col col-2">{user.email}</div>
                <div className="col col-3">
                  <div className="col-3-btn">{user.role}</div>
                </div>
                <div className="col col-4">
                  <StarIcon />
                  <StarIcon />
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </li>  
              ))}
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
