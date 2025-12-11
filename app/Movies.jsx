import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Loader from "./Component/loader";
import Navigation from "./Component/Navigation";

const Movies = () => {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const getMovies = async (pageNumber = 1, append = false) => {
    try {
      if (pageNumber === 1) setLoading(true);
      else setLoadingMore(true);

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=cefba94a8355c33d34ceea35237af99b&page=${pageNumber}`
      );
      const data = await response.json();

      if (append) {
        setMovies((prev) => [...prev, ...data.results]);
      } else {
        setMovies(data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const loadMore = () => {
    if (!loadingMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      getMovies(nextPage, true);
    }
  };

  const screenWidth = Dimensions.get("window").width;
  const numColumns =
    screenWidth > 768 ? 8 : screenWidth > 600 ? 6 : screenWidth > 420 ? 4 : 3;

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <view style={styles.loaders}> 
            <Loader/>
        </view>
      ) : (

      <View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Movies
          </Text>
        </View>
                <FlatList
          data={movie}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          ListEmptyComponent={<Text>no movies found</Text>}
          contentContainerStyle={styles.listContainer}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            loadingMore ? <Text>Loading more...</Text> : null
          }
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate("DetailPage", { item })}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.image}
              />
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  gap: 25,
                  fontSize: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10}}>
                  {" "}
                  {item.release_date
                    ? new Date(item.release_date).getFullYear()
                    : "N/A"}
                </Text>
                {item?.vote_average > 0 && (
                  <span className="text-xs text-yellow-600 flex items-center mt-1">
                    ⭐ {item?.vote_average?.toFixed(1)}
                  </span>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      )}
      <Navigation/>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loaders:{
    top: "50%",
    left: "50",
    translateX: "-50%",
    translateY: "-50%",
  },
  listContainer: {
    gap: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    width: 130,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
    width: 100,
  },
});