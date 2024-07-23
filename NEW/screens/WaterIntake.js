import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const WaterIntake = () => {
  const navigation = useNavigation();
  const [water, setWater] = useState("");

  const handleUpdate = () => {
    Alert.alert("Water Intake", `You have logged: ${water} liters`);
    // You can also send this data to the backend here
  };

  const handleNext = () => {
    navigation.navigate("NextScreen"); // Replace "NextScreen" with the actual name of the next screen
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={30} color="#254336" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Log Your Daily Water Intake</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter liters"
            keyboardType="numeric"
            value={water}
            onChangeText={setWater}
          />

          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Ionicons name="arrow-forward" size={30} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 65,
    left: 15,
  },
  titleText: {
    color: "#254336",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: "#254336",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 20,
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: "70%",
    alignItems: "center",
    alignSelf: "center",
  },
  updateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  nextButton: {
    position: "absolute",
    bottom: 50,
    right: 30,
    backgroundColor: "#254336",
    borderRadius: 25,
    padding: 10,
  },
});

export default WaterIntake;
