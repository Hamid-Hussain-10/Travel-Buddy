import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from "react-native";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <Image
        source={require("../assets/images/Group.png")}
        style={styles.image}
      />
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Create Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("login")}
        >
          <Text
            style={{
              color: "#4fccef",
              fontWeight: "500",
              fontSize: 12,
              textDecorationLine: "underline",
            }}
          >
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  signup: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 60,
  },
  image: {
    width: 150,
    height: 75,
    marginBottom: 30,
  },
  input: {
    width: "80%",
    height: 40,
    paddingHorizontal: 12,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderRadius: 16,
    marginTop: 10,
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
