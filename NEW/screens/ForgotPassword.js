import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    Alert.alert(
      "Password Reset",
      `Password reset email has been sent to ${email}`
    );
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Log")}
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back" size={30} color="#254336" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Forgot Password?</Text>
            <Text style={styles.signUpText}>Let's submit password reset</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handlePasswordReset}
            >
              <Text style={styles.loginButtonText}>Submit</Text>
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
    textAlign: "left", // Moved to the left
    marginLeft: 20, // Adjusted margin for alignment
    marginBottom: 100,
    marginTop: -390, // Positioning it below the back button
  },
  signUpText: {
    color: "#254336",
    fontSize: 24,
    marginLeft: 20,
    fontFamily: "serif",
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#254336",
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
    marginHorizontal: 20, // Centered input field
    paddingHorizontal: 10,
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 80, // Reduced button width
    borderRadius: 25,
    marginTop: 20,
    alignSelf: "center", // Centered button
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    padding: 5,
    position: "absolute",
    top: 5, // Moved the back button higher
    left: 10,
  },
});

export default ForgotPasswordScreen;
