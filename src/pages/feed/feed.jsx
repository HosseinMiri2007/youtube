import "./feed.css";
import VideoBox from "../../components/videobox/videoBox";
import videos from "../../components/videobox/videos";

const Feed = () => {
  return (
    <div className="feed_container">
      <div className="videos_container">
        {videos.map((video, i) => (
          <VideoBox
            key={i}
            img={video.img}
            title={video.title}
            subtitle={video.subtitle}
            youtubeimg={video.youtuberImg}
            youtubername={video.youtuber}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
