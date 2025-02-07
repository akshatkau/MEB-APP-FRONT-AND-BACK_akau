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
import { MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AgeSelection = () => {
  const navigation = useNavigation();
  const [selectedAge, setSelectedAge] = useState("18");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedUserId) {
          console.log("userId", storedUserId);
          setUserId(storedUserId);
        } else {
          console.error("No userId found in storage");
        }
      } catch (e) {
        console.error("Failed to fetch the userId from storage", e);
      }
    };

    getUserId();
  }, []);

  const handleContinue = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/api/v1/users/${userId}/health`,
        {
          age: selectedAge,
        }
      );
      Alert.alert("Selected Age", `You selected: ${selectedAge}`);
      navigation.navigate("Height");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", `Failed to update age: ${error.message}`);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gender")}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={30} color="#254336" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Height")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>What's your Age?</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedAge}
              onValueChange={(itemValue) => setSelectedAge(itemValue)}
              style={styles.picker}
            >
              {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                <Picker.Item
                  key={age}
                  label={age.toString()}
                  value={age.toString()}
                />
              ))}
            </Picker>
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
    top: -295,
    right: 15,
    fontSize: 18,
    color: "#254336",
  },
  titleText: {
    color: "#254336",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -200,
    marginBottom: 40,
  },
  pickerContainer: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  picker: {
    height: 200,
    width: "100%",
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: "70%",
    alignItems: "center",
    alignSelf: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AgeSelection;
