import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import Footer from "./footer";

const imageData = [
  { id: "1", uri: require("../assets/images/1.png") },
  { id: "2", uri: require("../assets/images/2.png") },
  { id: "3", uri: require("../assets/images/3.png") },
  { id: "4", uri: require("../assets/images/4.png") },
];

export default function Home() {
  return (
    
    <View style={{ flex: 1, backgroundColor: '#fff',}}>
        <Text style={styles.text}>Home</Text>
    <FlatList
      data={imageData}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.imageWrapper}>
          <Image source={item.uri} style={styles.image} />
        </View>
      )}
    />
    <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  imageWrapper: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 15,
  },

});
