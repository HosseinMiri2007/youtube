import "./video.css";
import Vid from "../../assets/video/vid.mp4";
const Video = () => {
  return (
    <div>
      <video src={Vid} controls />
      <h3>Title</h3>
      <h4>description</h4>
    </div>
  );
};

export default Video;
