import React from "react";
import user from "../assets/icons/user.svg";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src={user} alt="user" className="avatar" />
      <div className="user-details">
        <p className="user-name">Aarohi Shah</p>
        <p className="user-role">Admin</p>
      </div>
    </div>
  );
};

export default UserProfile;
