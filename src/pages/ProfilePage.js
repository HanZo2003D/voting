import React from "react";
import "../styles/profile.css"; // Import CSS for styling

const ProfilePage = ({ isLoggedIn, logout, isAdmin }) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome, {isLoggedIn.username}!</h2>

        <p>Role: {isAdmin ? "Admin" : "User"}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
