import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constant";
import VideoCart from "../videoCart/VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json.items);
  };


  return (
    video.length > 0 && (
      <div className="flex flex-wrap justify-around">
        {video.map((item, indx) => (
          <Link to={"/watch?v=" + item.id} key={indx}>
            <VideoCart  info={item} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
