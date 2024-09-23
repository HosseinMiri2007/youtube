const VideoBox = ({ img, title, subtitle, youtubername }) => {
  return (
    <div className="videoBox_container">
      <div className="videoBox_top">
        <img src={img} alt="img" />
      </div>

      <div className="videoBox_bottom_container">
        <div className="videoBox_text">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <div className="videoBox_youtuberInfo">
          <div className="videoBox_youtuber">
            <h4>{youtubername}</h4>
          </div>

          <div className="videoBox_view">
            <h4>7.5M Views</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
