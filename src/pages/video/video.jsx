import "./video.css";
const Video = ({ videoLink, videoCategory }) => {
  return (
    <div>
      <video src={`${videoCategory / videoLink}`}></video>
    </div>
  );
};

export default Video;
