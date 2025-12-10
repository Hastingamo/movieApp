import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from "react-native";
// import { HoverEffect } from "react-native-gesture-handler";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const getSeries = async (pageNumber = 1, append = false) => {
    try {
      if (pageNumber === 1) setLoading(true);
      else setLoadingMore(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=cefba94a8355c33d34ceea35237af99b&page=${pageNumber}`
      );
      const data = await response.json();
      if (append) {
        setSeries((prev) => [...prev, ...data.results]);
      } else {
        setSeries(data.results);
      }
    } catch (error) {
      console.error("Error fetching series:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loadingMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      getSeries(nextPage, true);
    }
  };

  const screenWidth = Dimensions.get("window").width;
  const numColumns = screenWidth > 768 ? 8 : screenWidth > 600 ? 6 : screenWidth > 420 ? 4 : 3;
  useEffect(() => {
    getSeries();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View>
            <Text style={{fontSize:24,fontWeight:"bold",marginBottom:10}}>TV Series</Text>
          </View>
      
               <FlatList
          data={series}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={<Text>no series found</Text>}
          numColumns={numColumns}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.Image}
              ></Image>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.titleText}
              >
                {item.name}
              </Text>
                       <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  fontSize: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10}}>
                  {" "}
                  {item.first_air_date
                    ? new Date(item.first_air_date).getFullYear()
                    : "N/A"}
                </Text>
                {item?.vote_average > 0 && (
                  <span className="text-xs text-yellow-600 flex items-center mt-1">
                    ⭐ {item?.vote_average?.toFixed(1)}
                  </span>
                )}
              </View>
            </View>
          )}
        />
        </View>
   
      )}
    </View>
  );
};

export default Series;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  Image: {
    width: 100,
    height: 150,
  },
  titleText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
    width: 100,
  },
  imageContainer: {
    margin: 5,
    alignItems: "center",
    flex: 1,
  },
  
  //   ImageContainer:HoverEffect  {
  //   scale: 1.1,
  //   transition: "transform 0.3s",
  // },
});