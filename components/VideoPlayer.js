import React from 'react';
// import vid from "../mp4/Showreel.mp4";

const VideoPlayer = () => {
  return (
    <div>
      <video controls>
        <source src="../mp4/Showreel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;