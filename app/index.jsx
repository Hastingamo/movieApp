import { useState, useEffect } from 'react';
import { Text, View, Image, useWindowDimensions } from 'react-native'

const API_KEY = "cefba94a8355c33d34ceea35237af99b";
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const Index = () => {
  const [movies, setMovies] = useState([]);
    const { width } = useWindowDimensions();

  // const [width, setWidth] = useState();

  // const handleResize = () => {
  //   window.addEventListener("resize", () => {
  //     setWidth(window.innerWidth);
  //   });
  
  // };

  useEffect(() => {
    fetchMovies();
    // handleResize();
    //  window.addEventListener("resize", () => {
    //    setWidth(window.innerWidth);
    //  });

    //  return () => {
    //    window.removeEventListener("resize", () => {
    //      setWidth(window.innerWidth);
    //    });
    //  };
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

    const featuredMovie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

  return (
    <View>
      {featuredMovie ?(
        <Image
          key={featuredMovie.id}
          source={{ uri: `https://image.tmdb.org/t/p/w500${featuredMovie.poster_path}` }}
          style={{width: width > 400 ? "200%" : "100%", marginLeft: width > 400 ? "-50%" : "0" }}
        />
      ) : (<Text>Loading...</Text>
        
      )}
    </View>
  )
}

export default Index
