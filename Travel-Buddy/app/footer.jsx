import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
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
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/26/10/20250426104549-ER1XP4IC.json"
          )
        }
      >
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
});
