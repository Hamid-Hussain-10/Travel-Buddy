import { useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import Footer from "./footer";

const Driverprofile = () => {
  const { name, image, cars } = useLocalSearchParams();
  const carArray = JSON.parse(cars || "[]");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: image }} style={styles.driverImage} />
        <Text style={styles.driverName}>{name}</Text>

        <TouchableOpacity style={styles.followButton} onPress={() => alert(`You Followed ${name}`)}>
          <Text style={styles.followText}>
            FOLLOW {name?.split(" ")[0]?.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.messageButton}
          onPress={() => Linking.openURL("https://wa.me/923433563121")}
        >
          <Text style={styles.messageText}>MESSAGE</Text>
        </TouchableOpacity>

        <View style={styles.carContainer}>
          {carArray.map((car, index) => (
            <Image
              key={index}
              source={{ uri: car.uri }}
              style={styles.carImage}
            />
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default Driverprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
  driverImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 8,
    borderColor: "#e8e3e3",
    borderStyle: "dotted",
  },
  driverName: {
    fontSize: 24,
    fontWeight: "600",
  },
  location: {
    color: "gray",
    fontWeight: "600",
    marginBottom: 20,
  },
  followButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  followText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  messageButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  messageText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  carContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  carImage: {
    width: "48%",
    height: 200,
    borderRadius: 10,
    borderWidth:1,
    borderColor: 'red',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});
