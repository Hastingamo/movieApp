import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router"; 
import Loader from "../components/Loader";
import VideoList from "../components/VideoList";
import { Image } from "expo-image";
const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useLocalSearchParams();
  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=cefba94a8355c33d34ceea35237af99b`
      );
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <View>
        <Loader />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>MoviesDetails</Text>
      <VideoList id={id} category="movie" />
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` }}
        style={styles.image}
      />
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", margin: 10 }}>{movieDetails.title}</Text>
      <Text style={{ color: "white", fontSize: 16, margin: 10 }}>{movieDetails.overview}</Text>
    </View>
  );
};

export default MoviesDetails;

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#111827"
  },
  image: {
    width: "90%",
    height: 300,
    marginTop: 40,
    alignSelf: "center",
  },
});