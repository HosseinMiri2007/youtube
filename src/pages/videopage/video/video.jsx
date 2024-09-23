import "./video.css";
const Video = ({ id }) => {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="The Best VSCode Extensions 2024"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>Title</h3>
      <h4>description</h4>
    </div>
  );
};

export default Video;
