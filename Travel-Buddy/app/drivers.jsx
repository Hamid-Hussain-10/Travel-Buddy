import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Footer from "./footer";
import { useRouter } from "expo-router";

const driversData = [
  {
    id: 1,
    name: "Ali Khan",
    image: { uri: "https://randomuser.me/api/portraits/men/75.jpg" },
    description: "Experienced local driver with 8+ years of mountain driving.",
    cars: [
      {
        uri: "https://cdn.pixabay.com/photo/2020/11/09/01/21/car-5725332_1280.jpg",
      },
      {
        uri: "https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Rehmat Ullah",
    image: { uri: "https://randomuser.me/api/portraits/men/32.jpg" },
    description: "Skardu native with deep knowledge of scenic routes.",
    cars: [
      {
        uri: "https://cdn.pixabay.com/photo/2021/08/31/19/04/lamborghini-6589872_1280.jpg",
      },
      {
        uri: "https://cdn.pixabay.com/photo/2023/03/15/03/46/jeep-7853620_1280.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Sajid Hussain",
    image: { uri: "https://randomuser.me/api/portraits/men/41.jpg" },
    description: "Friendly driver offering budget-friendly clean rides.",
    cars: [
      {
        uri: "https://cdn.pixabay.com/photo/2020/09/14/07/40/vehicle-5570248_1280.jpg",
      },
      {
        uri: "https://cdn.pixabay.com/photo/2024/06/08/15/57/ai-generated-8817049_1280.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Ibrahim Baltistani",
    image: { uri: "https://randomuser.me/api/portraits/men/18.jpg" },
    description: "Specializes in long drives between Skardu and Islamabad.",
    cars: [
      {
        uri: "https://cdn.pixabay.com/photo/2017/09/01/20/23/ford-2705402_1280.jpg",
      },
      {
        uri: "https://cdn.pixabay.com/photo/2022/04/02/16/31/vintage-car-7107319_1280.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Muhammad Karim",
    image: { uri: "https://randomuser.me/api/portraits/men/65.jpg" },
    description: "Tour guide and driver combo. Fluent in 3 languages.",
    cars: [
      {
        uri: "https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_1280.jpg",
      },
      {
        uri: "https://cdn.pixabay.com/photo/2022/08/13/15/25/mercedes-benz-7383932_1280.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Farooq Shah",
    image: { uri: "https://randomuser.me/api/portraits/men/56.jpg" },
    description: "Veteran driver with luxury SUV for family tours.",
    cars: [
      {
        uri: "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
      },
      {
        uri: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg",
      },
    ],
  },
];

export default function DriverScreen() {
  const router = useRouter();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/driverprofile",
          params: {
            name: item.name,
            image: item.image.uri,
            cars: JSON.stringify(item.cars),
          },
        })
      }
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choice Your Drivers</Text>

      <FlatList
        data={driversData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        style={styles.flatlist}
      />

      <View style={styles.footerWrapper}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
    backgroundColor: "#060606",
    color: "#fff",
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    width: "85%",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 15,
  },
  flatlist: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    marginBottom: 12,
    borderBottomWidth: 1,
    padding: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  info: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  desc: {
    marginTop: 4,
    fontSize: 12,
    color: "#555",
  },
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
