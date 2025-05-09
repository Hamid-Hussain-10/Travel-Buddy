import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Footer from "./footer";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Name: "",
    Gender: "",
    "Date of Birth": "",
    Contact: "",
    Location: "",
    "Travel Interest": "",
    About: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.heading}>Profile</Text>

          {Object.keys(formData).map((label, index) => (
            <View key={index} style={styles.inputGroup}>
              <Text style={styles.label}>{label}</Text>
              <TextInput
                style={[styles.input, label === "About" && styles.textarea]}
                placeholder={`Enter your ${label.toLowerCase()}`}
                multiline={label === "About"}
                numberOfLines={label === "About" ? 4 : 1}
                value={formData[label]}
                onChangeText={(value) => handleChange(label, value)}
              />
            </View>
          ))}

          <TouchableOpacity
            onPress={() => router.push({ pathname: "/user", params: formData })}
            style={styles.btn}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    fontWeight: "500",
  },
  input: {
    borderColor: "#ed9913",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 12,
  },
  textarea: {
    height: 100,
    textAlignVertical: "top",
  },
  btn: {
    width: "30%",
    alignSelf: "center",
    backgroundColor: "#105e41",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});
