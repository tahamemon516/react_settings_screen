import React from "react";
import ArrowIcon from "../icons/arrow";

const UserCard = ({ isOpen, handler }) => {
  return (
    <div className="setting-main-card-container">
      <div className="setting-card-container">
        <div className="setting-text-container">
          <span onClick={handler} style={{cursor: 'pointer'}}>
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
          <div className="secondary-user-container">
            <div className="main-box-container">
              <div className="box1">
                <span className="box-name">Name</span>
              </div>

              <div className="box2">
                <span className="box-name">Email</span>
              </div>

              <div className="box3">
                <span className="box-name">Permission</span>
              </div>

              <div className="box4">
                <span className="box-name">Name</span>
              </div>
            </div>
            <div className="containers-main-container">
              <div className="cont1">
                <span className="cont-name">Jhon Hopkin</span>
                <span className="cont-name">Thomas Lee</span>
                <span className="cont-name">Zach Dawson</span>
              </div>

              <div className="cont2"></div>

              <div className="cont3">
                <button className="cont-btn">Admin</button>

                <button className="cont-btn">User</button>

                <button className="cont-btn">User</button>
              </div>

              <div className="cont4"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
