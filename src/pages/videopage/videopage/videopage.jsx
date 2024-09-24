import "./videopage.css";
import Recommanded from "../recommanded/recommanded";
import Video from "../video/video";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { id, title } = useParams();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Video id={id} title={title} />
      <Recommanded style={{ flexBasis: 1 }} />
    </div>
  );
};

export default VideoPage;
