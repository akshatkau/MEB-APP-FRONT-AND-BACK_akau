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

const BloodType = () => {
  const navigation = useNavigation();
  const [selectedBloodType, setSelectedBloodType] = useState("A");
  const [selectedRhFactor, setSelectedRhFactor] = useState("+");

  const handleContinue = () => {
    Alert.alert(
      "Selected Blood Type",
      `You selected: ${selectedBloodType}${selectedRhFactor}`
    );
    navigation.navigate("SleepLevel");
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
          <TouchableOpacity onPress={() => navigation.navigate("SleepLevel")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>What's your blood type?</Text>

          <View style={styles.bloodTypeContainer}>
            {["A", "B", "AB", "O"].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.bloodTypeOption,
                  selectedBloodType === type && styles.selectedOption,
                ]}
                onPress={() => setSelectedBloodType(type)}
              >
                <Text
                  style={[
                    styles.bloodTypeText,
                    selectedBloodType === type && styles.selectedBloodTypeText,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.selectedBloodTypeDisplay}>
            {selectedBloodType}
            {selectedRhFactor}
          </Text>

          <View style={styles.rhFactorContainer}>
            {["+", "-"].map((factor) => (
              <TouchableOpacity
                key={factor}
                style={[
                  styles.rhFactorOption,
                  selectedRhFactor === factor && styles.selectedOption,
                ]}
                onPress={() => setSelectedRhFactor(factor)}
              >
                <Text
                  style={[
                    styles.rhFactorText,
                    selectedRhFactor === factor && styles.selectedRhFactorText,
                  ]}
                >
                  {factor}
                </Text>
              </TouchableOpacity>
            ))}
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
    top: -190,
    right: 15,
    fontSize: 18,
    color: "#254336",
  },
  titleText: {
    color: "#254336",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -100,
    marginBottom: 40,
  },
  bloodTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  bloodTypeOption: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#254336",
    borderRadius: 10,
  },
  bloodTypeText: {
    fontSize: 24,
    color: "#254336",
  },
  selectedOption: {
    backgroundColor: "#254336",
  },
  selectedBloodTypeText: {
    color: "#fff",
  },
  selectedBloodTypeDisplay: {
    fontSize: 170,
    fontWeight: "bold",
    color: "#254336",
    textAlign: "center",
    marginLeft: 90,
    marginBottom: 20,
  },
  rhFactorContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  rhFactorOption: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#254336",
    borderRadius: 10,
  },
  rhFactorText: {
    fontSize: 24,
    color: "#254336",
  },
  selectedRhFactorText: {
    color: "#fff",
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

export default BloodType;
