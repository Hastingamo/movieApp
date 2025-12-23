import React, { useEffect, useState, useRef } from "react";
import { useParams } from "expo-router";

const VideoList = ({ id }) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  const API_KEY = "cefba94a8355c33d34ceea35237af99b";

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${category}/${id}/videos?api_key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.results.slice(0, 1)); // Limit to 5 videos
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, [category, id]);

  return (
    <div className="space-y-6">
      {videos.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </div>
  );
};

const Video = ({ video }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
      iframeRef.current.setAttribute("height", height);
    }
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{video.name}</h3>
      <div className="w-full aspect-video">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          width="100%"
          className="rounded-lg shadow-lg"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoList;