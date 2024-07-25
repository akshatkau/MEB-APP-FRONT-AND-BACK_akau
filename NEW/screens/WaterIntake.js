import React, { useState, useEffect } from "react";
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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WaterIntake = () => {
  const navigation = useNavigation();
  const [water, setWater] = useState(0);
  const maxWaterIntake = 3500; // Max water intake in ml for full background
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUserId(JSON.parse(user).userId);
      }
    };

    fetchUserId();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      Alert.alert("Water Intake", `You have logged: ${water} mL`);
      if (!token) {
        // Handle token not found
        return;
      }

      const response = await axios.post(
        `http://your-local-ip:3001/api/v1/users/${userId}/daily`,
        { water },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert("Water Intake", `You have logged: ${water} mL`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncrement = () => {
    setWater((prevWater) => Math.min(prevWater + 250, maxWaterIntake));
  };

  // Calculate the percentage of water intake
  const waterPercentage = Math.min((water / maxWaterIntake) * 100, 100);

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={[styles.waterOverlay, { height: `${waterPercentage}%` }]} />

      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={30} color="#254336" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Ionicons name="water-sharp" size={30} color="#254336" />
          <Text style={styles.titleText}>Hydration</Text>
        </View>

        <Text style={styles.waterInputText}>{water} mL</Text>
        <Text style={styles.remainingText}>
          You need {maxWaterIntake - water} mL more!
        </Text>

        <TouchableOpacity
          style={styles.incrementButton}
          onPress={handleIncrement}
        >
          <Ionicons name="add-circle" size={50} color="#254336" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Main")}
        >
          <Ionicons name="arrow-forward" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    zIndex: 1, // Ensure the container stays on top
  },
  backButton: {
    position: "absolute",
    top: 65,
    left: 15,
    zIndex: 2,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    zIndex: 2,
  },
  titleText: {
    color: "#254336",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
  },
  waterInputText: {
    color: "#254336",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    zIndex: 2,
  },
  remainingText: {
    color: "#254336",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    zIndex: 2,
  },
  incrementButton: {
    alignItems: "center",
    marginVertical: 20,
    zIndex: 2,
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
    zIndex: 2,
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
    zIndex: 2,
  },
  waterOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 150, 255, 0.3)", // Adjust opacity as needed
    zIndex: 0, // Ensure the overlay is behind other elements
  },
});

export default WaterIntake;
