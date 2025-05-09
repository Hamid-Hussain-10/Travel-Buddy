import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Footer from "./footer";

export default function User() {
  const params = useLocalSearchParams();
    const router = useRouter();
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.image}
        />
        {Object.entries(params)
          .filter(([key]) => ["Name", "Location", "Contact"].includes(key))
          .map(([key, value], index) => (
            <View key={index} style={styles.item}>
              <Text
                style={[
                  styles.value,
                  key === "Name" && styles.nameStyle,
                  key === "Location" && styles.locationStyle,
                  key === "Contact" && styles.contactStyle,
                ]}
              >
                {value}
              </Text>
            </View>
          ))}
      </ScrollView>
      <TouchableOpacity onPress={() => router.push("/destinations")} style={styles.btn}>
        <Text style={{color:'#fff'}}>Search Your Destination Here</Text>
      </TouchableOpacity>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#c8bb75",
  },
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#105e41",
  },
  item: {
    marginBottom: 15,
  },
  nameStyle: {
    fontSize: 32,
    alignSelf: "center",
    marginTop: 30,
  },
  locationStyle: {
    fontSize: 16,
    alignSelf: "center",
  },
  contactStyle: {
    fontSize: 16,
    alignSelf: "center",
  },
    image: {
        width: 140,
        height: 130,
        alignSelf: "center",
        marginTop: 50,
    },
    btn: {
        position: "absolute",
        top: 400,
        padding: 15,
        alignItems: "center",
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#151515",
    },
});
