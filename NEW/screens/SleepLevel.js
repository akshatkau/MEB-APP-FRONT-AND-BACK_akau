import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const SleepLevel = () => {
  const navigation = useNavigation();
  const [hours, setHours] = useState(6); // Default sleep hours
  const minHours = 0;
  const maxHours = 12;

  const increaseHours = () => {
    if (hours < maxHours) setHours(hours + 1);
  };

  const decreaseHours = () => {
    if (hours > minHours) setHours(hours - 1);
  };

  const getDescription = () => {
    if (hours <= 4) return "Poor";
    if (hours <= 7) return "Moderate";
    return "Good";
  };

  const handleContinue = () => {
    Alert.alert("Selected Sleep Hours", `You selected: ${hours} hours`);
    navigation.navigate("Main"); // Replace "NextScreen" with your actual next screen
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
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <MaterialIcons name="arrow-back" size={30} color="#254336" />
          </TouchableOpacity>
          <Text style={styles.titleText}>
            How would you rate{"\n"} your sleep level?
          </Text>

          <View style={styles.sleepHoursContainer}>
            <Text style={styles.sleepHoursText}>{hours} hrs</Text>
          </View>

          <Text style={styles.descriptionText}>{getDescription()}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={decreaseHours} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={increaseHours} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
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
  skipText: {
    position: "absolute",
    top: 1,
    right: -375,
    fontSize: 18,
    color: "#254336",
  },
  titleText: {
    color: "#254336",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  sleepHoursContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  sleepHoursText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#254336",
  },
  descriptionText: {
    color: "#254336",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#254336",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SleepLevel;
