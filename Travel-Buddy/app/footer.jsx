import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";

export default function Footer() {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("home")}>
        <FontAwesome name="home" size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/destinations")}>
        <FontAwesome name="search" size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/register")}>
        <Ionicons
          name="add-circle-outline"
          size={24}
          color="#fff"
          style={styles.addbtn}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/drivers")}>
        <Ionicons name="chatbubble-outline" size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/user")}>
        <FontAwesome name="user" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#105e41",
    paddingVertical: 12,
  },
  addbtn: {
    backgroundColor: "#d4350d",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
  },
});
