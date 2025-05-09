import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Start() {
  const router = useRouter();

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/Rectangle.png")}
        style={styles.background}
      >
        <Image
          source={require("../assets/images/Group.png")}
          style={styles.image}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.push("/login")}
          >
            <Text style={{ color: "#ffffff", fontWeight: "600" }}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn1}
            onPress={() => router.push("/signup")}
          >
            <Text style={{ color: "#ffffff", fontWeight: "600" }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 90,
    marginRight: 25,
    position: "absolute",
    top: 250,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    position: "absolute",
    top: 680,
    left: 30,
  },
  btn: {
    width: "40%",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#105e41",
  },
  btn1: {
    width: "40%",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#000000",
  },
});
