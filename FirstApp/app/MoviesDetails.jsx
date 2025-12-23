import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Loader from '../components/Loader';
import VideoList from '../components/VideoList';
const MoviesDetails = () => {
    const route = useRoute();
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = route.params;
    useEffect(() => {
        fetchMovieDetails(id);
    }, [id]);

    const fetchMovieDetails = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=cefba94a
8355c33d34ceea35237af99b`
            );
            const data = await response.json();
            setMovieDetails(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
        finally{
            setLoading(false);
        }
    };
    if (loading) {
        return (
            <View>
                <Loader/>
            </View>
        );
    }
  return (
    <View>
      <Text>MoviesDetails</Text>
      <Text>{movieDetails?.title}</Text>
      <VideoList id={id} />
    </View>
  )
}

export default MoviesDetails

const styles = StyleSheet.create({

})