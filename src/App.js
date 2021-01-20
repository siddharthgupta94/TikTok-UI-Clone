import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./App.css";

const API_URL =
  "https://raw.githubusercontent.com/siddharthgupta94/TikTok-UI-Clone/main/data.json";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // TODO: Get the data from API_URL above
    // Store it inside videos state variable
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="app">
      <div className="container">
        {videos.map((video) => {
          const { url, channel, description, song } = video;
          return (
            <Video
              key={url}
              channel={channel}
              description={description}
              song={song}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
}
