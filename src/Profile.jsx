import React from "react";
// import profilePic from "./profile.png"; 

function Profile() {
  return (
    <div className="profile-container">
      {/* <img src={profilePic} alt="Sharmin Oomatia" className="profile-image" /> */}
      <img src="/profile.png" alt="Sharmin Oomatia" className="profile-image" />
      <h1>Sharmin Oomatia</h1>
      <p>Web Developer | UX Enthusiast | Problem Solver</p>
    </div>
  );
}

export default Profile;
