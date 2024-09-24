import "./feed.css";
import VideoBox from "../../components/videobox/videoBox";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const apikey = "AIzaSyAfgEtAxJnQLyIu_g0nn4nryffYzM8W7v0";

  useEffect(() => {
    fetchApi();
  }, [category]);

  async function fetchApi() {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${apikey}&maxResults=50&videoCategoryId=${category}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .then(console.log(data))
      .catch((error) => console.error("Error:", error));
  }
  function viewCounter(view) {
    if (view > 1000000) {
      return Math.floor(view / 1000000) + "M";
    } else if (view > 1000) {
      return Math.floor(view / 1000) + "K";
    }
  }
  return (
    <div className="feed_container">
      <div className="videos_container">
        {data.map((video, i) => {
          return (
            <Link
              key={i}
              to={`video/${video.id}/${video.snippet.localized.title}`}
            >
              <VideoBox
                img={video.snippet.thumbnails.medium.url}
                title={video.snippet.localized.title}
                subtitle={video.subtitle}
                youtubername={video.snippet.channelTitle}
                views={viewCounter(video.statistics.viewCount)}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
