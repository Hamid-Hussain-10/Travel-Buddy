import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { skarduDestinations } from "./skardudestination";
import Footer from "./footer";
import { useRouter } from "expo-router";

const numColumns = 3;
const { width } = Dimensions.get("window");
const itemSize = width / numColumns - 20;

export default function Destination() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState(skarduDestinations);

  useEffect(() => {
    if (destination.trim() === "") {
      setFilteredDestinations(skarduDestinations);
    } else {
      const filtered = skarduDestinations.filter((item) =>
        item.name.toLowerCase().includes(destination.toLowerCase())
      );
      setFilteredDestinations(filtered);
    }
  }, [destination]);

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.heading}>Destinations</Text>

      <TextInput
        value={destination}
        onChangeText={setDestination}
        placeholder="Search Destination"
        style={styles.search}
      />

      {filteredDestinations.length === 0 ? (
        <Text style={styles.noResult}>No destinations found.</Text>
      ) : (
        <FlatList
          data={filteredDestinations}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/destination/[name]",
                  params: {
                    name: item.name,
                    image: item.image,
                  },
                })
              }
              style={styles.item}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  search: {
    width: "60%",
    height: 40,
    alignSelf: "center",
    textAlign: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  noResult: {
    textAlign: "center",
    color: "gray",
    fontSize: 16,
    marginTop: 30,
  },
  list: {
    paddingHorizontal: 15,
  },
  item: {
    width: itemSize,
    margin: 5,
    alignItems: "center",
    borderRadius: 12,
    padding: 3,
    // shadowColor: "#0091ff",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
  },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    marginTop: 5,
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
  },
});
