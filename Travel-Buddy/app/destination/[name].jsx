import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { skarduDestinations } from "../skardudestination";
import Footer from "../footer";

export default function DestinationDetails() {
  const { name } = useLocalSearchParams();
  const router = useRouter();
  const destination = skarduDestinations.find((item) => item.name === name);

  if (!destination) {
    return <Text>Destination not found</Text>;
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={destination.image} style={styles.image} />
        <Text style={styles.title}>{destination.name}</Text>
        <Text style={styles.desc}>{destination.description}</Text>

        <TouchableOpacity
          onPress={() => router.push("/drivers")}
          style={styles.btn}
        >
          <Text style={{ color: "#fff" }}>Search Your Drivers Here</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    objectFit: "fill",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 5,
  },
  desc: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  btn: {
    width: "85%",
    alignSelf: "center",
    marginTop: 30,
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#151515",
  },
});
