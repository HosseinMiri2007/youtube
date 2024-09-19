import "./profile.css";
import profilePic from "/src/assets/profile/1596697.jpg";
import { BsCameraVideo } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
const Profile = () => {
  return (
    <div style={{ display: "flex", alignItems:"center",gap: "10px" }}>
      <BsCameraVideo className="navProfile" style={{ color: "red" }} />
      <BiBell className="navProfile" />
      <img src={profilePic} alt="profile picture"  className="profilePic"/>
    </div>
  );
};

export default Profile;
