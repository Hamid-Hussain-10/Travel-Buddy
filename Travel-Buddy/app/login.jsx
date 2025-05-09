import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <Image
        source={require("../assets/images/Group.png")}
        style={styles.image}
      />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.push("/home")}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
          }}
          onPress={() => navigation.navigate("signup")}
        >
          <Text
            style={{
              color: "#e1a82c",
              fontSize: 12,
              fontWeight: "500",
              textDecorationLine: "underline",
              marginTop: 5,
            }}
          >
            Don&apos;t have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  login: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 80,
  },
  input: {
    width: "80%",
    height: 40,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderColor: "#000000",
    borderRadius: 16,
    paddingLeft: 10,
    marginTop: 20,
  },
  image: {
    width: 140,
    height: 70,
    alignSelf: "center",
    marginBottom: 30,
  },
  btnContainer: {
    alignItems: "center",
  },
  btn: {
    width: "40%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#105e41",
  },
});
