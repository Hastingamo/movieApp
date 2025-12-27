import React, { useEffect, useState, useRef } from "react";
import { Text } from "react-native";
import Video from "react-native-video";
import { View } from "react-native-web";
const VideoList = ({ id, category }) => {
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

    if (id && category) getVideos();
  }, [category, id]);

  return (
    <View style={{ gap: 20 }}>
      {videos.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </View>
  );
};

const videoss = ({ video }) => {
  //   useEffect(() => {
  //     if (iframeRef.current) {
  //       const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
  //       iframeRef.current.setAttribute("height", height);
  //     }
  //   }, []);

  return (
    <View>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", margin: 10 }}>{video.name}</Text>
      <View className="w-full aspect-video">
        <View style={{ height: "60%" }}>
          <Video
            src={`https://www.youtube.com/embed/${video.key}`}

            title={video.name}
            style={{width: "100%"}}
            
          ></Video>
        </View>
      </View>
    </View>
  );
};

export default VideoList;
