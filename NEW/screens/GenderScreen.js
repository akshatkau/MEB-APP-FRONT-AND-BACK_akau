import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons"; // For gender symbols

const GenderScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState("");
  const [isGenderSelected, setIsGenderSelected] = useState(false);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsGenderSelected(true);
  };

  const handleContinue = () => {
    {
      if (isGenderSelected == "Male" || "Female") {
        Alert.alert("Gender Selected", `You selected: ${selectedGender}`);
        navigation.navigate("Age");

        // Continue to the next step
      } else if (isGenderSelected == "Prefer not to say") {
        Alert.alert("Gender Selected", "You selected: Other");
        navigation.navigate("Age");
      } else if (isGenderSelected == "Other") {
        Alert.alert("Gender Selected", "You selected: Other");
        navigation.navigate("Age");
      }

      // Continue to the next step
      else {
        Alert.alert("Error", "Please select your gender.");
      }
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
            onPress={() => navigation.navigate("Name")}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={30} color="#254336" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Age")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>What's your gender?</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderBox,
                selectedGender === "Male" && styles.selectedGenderBox,
              ]}
              onPress={() => handleGenderSelect("Male")}
            >
              <FontAwesome5
                name="mars"
                size={24}
                color="#254336"
                style={styles.genderIcon}
              />
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderBox,
                selectedGender === "Female" && styles.selectedGenderBox,
              ]}
              onPress={() => handleGenderSelect("Female")}
            >
              <FontAwesome5
                name="venus"
                size={24}
                color="#254336"
                style={styles.genderIcon}
              />
              <Text style={styles.genderText}>Female</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => handleGenderSelect("Other")}
            >
              <Text style={styles.secondaryButtonText}>Other</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => handleGenderSelect("Prefer not to say")}
            >
              <Text style={styles.secondaryButtonText}>Prefer not to say</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleContinue}
            >
              <Text style={styles.primaryButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: "center", // Center content vertically
    paddingHorizontal: 20, // Consistent horizontal padding
  },
  titleText: {
    color: "#254336",
    fontSize: 30, // Increased font size
    fontWeight: "bold",
    textAlign: "center", // Centered text
    marginTop: -100, // Adjust margin to position below back button
    marginBottom: 80,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 40,
  },
  genderBox: {
    width: "45%",
    height: 200, // Increased height
    borderColor: "#254336",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedGenderBox: {
    backgroundColor: "#e4ebe4",
  },
  genderIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 30,
  },
  genderText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
  },
  chromosomeText: {
    fontSize: 14,
    marginTop: 5,
  },
  skipText: {
    fontSize: 18,
    top: -130,
    left: 340,
  },
  buttonContainer: {
    marginTop: 20,

    marginHorizontal: 20,
  },
  secondaryButton: {
    backgroundColor: "#e4ebe4",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 25,
  },
  secondaryButtonText: {
    color: "#254336",
    fontSize: 16,
    fontWeight: "bold",
  },
  primaryButton: {
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    padding: 5,
    position: "absolute",
    top: 65,
    left: 15,
  },
});

export default GenderScreen;
