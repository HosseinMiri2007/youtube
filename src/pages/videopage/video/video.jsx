import "./video.css";
const Video = ({ id, title }) => {
  return (
    <div
      className="video_container"
      style={{ marginTop: "10rem", marginLeft: "2rem" }}
    >
      <iframe
        style={{ width: "1080px", height: "480px" }}
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{title}</h3>
      <h4>description</h4>
    </div>
  );
};

export default Video;
