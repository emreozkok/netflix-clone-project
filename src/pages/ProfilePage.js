import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import Plans from "./Plans";

function ProfilePage() {
  const user = useSelector(selectUser);

  if (user === null) {
    return <div>Loading....</div>;
  }
  return (
    <div className="profile">
      <Nav />
      <div className="profile_pic">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profile_detail">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
              <Plans />
              <p></p>
              <Link to="/">
                <button onClick={() => auth.signOut()} className="profile_signout">
                  Sign Out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
