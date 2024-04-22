import "./VideoPopup.css";

const VideoPopup = ({ videoSrc, onClose }) => {
  return (
    <div className="video-popup">
      <div className="video-container">
        <video
          id="videoElement"
          src={videoSrc}
          controls
          autoPlay
          width="85%"
          height="85%"
        />
        <button className="close-button-video" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};
export default VideoPopup;
