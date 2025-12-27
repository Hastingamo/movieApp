import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import VideoList from "../components/VideoList";
import { useLocalSearchParams } from "expo-router";
const SeriesDetail = () => {
  const { id } = useLocalSearchParams;
  const [series, setSeries] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchDetails();
  });

  const fetchDetails = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=cefba94a8355c33d34ceea35237af99b`
      );
      const response = await data.json();
      setSeries(response);
    } catch (error) {
      setError("series not found please try again later");
    } finally {
      setLoading(true);
    }
  };
  if(!loading){
    return(
        <view>
            <Loader/>
        </view>
    )

  }
  return (
    <View>
      <Text>SeriesDetail</Text>
      <Text>{series.name}</Text>
      <VideoList id={id} category="tv"/>
    </View>
  );
};

export default SeriesDetail;

const styles = StyleSheet.create({});
