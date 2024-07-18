import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.8:3001/api/v1/auth/signup",
        { email, username, password }
      );
      console.log("Signup successful:", response.data);
      Alert.alert("Signup successful!");
      navigation.navigate("Main");
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        if (
          error.response.status === 400 &&
          error.response.data.error === "Email already exists"
        ) {
          Alert.alert(
            "Signup Failed",
            "Email already exists. Please use a different email."
          );
        } else {
          Alert.alert(
            "Signup Failed",
            "Signup failed. Please try again later."
          );
        }
      } else {
        Alert.alert(
          "Network Error",
          "Network error occurred. Please check your internet connection."
        );
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
          <View style={styles.topRow}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.titleText}>MyEasyPharma</Text>
          </View>
          <Text style={styles.signUpText}>SignUp</Text>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.labelText}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.forgotPassword}>Forgotten Password?</Text>
          <Text style={styles.agreementText}>
            By creating an account you are agreeing to our{" "}
            <Text style={styles.underline}>Terms of Service</Text> and{" "}
            <Text style={styles.underline}>Privacy Policy</Text>.
          </Text>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Log")}>
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Text style={styles.underline}>Login</Text>
            </Text>
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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  container: {
    flex: 1,
    paddingTop: 50,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 30,
    flex: 1,
  },
  signUpText: {
    color: "#254336",
    fontSize: 26,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  labelText: {
    color: "#254336",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "500",
  },
  input: {
    height: 45,
    borderColor: "#254336",
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    color: "#254336",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    textDecorationLine: "underline",
  },
  agreementText: {
    color: "#254336",
    fontSize: 14,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },
  underline: {
    textDecorationLine: "underline",
  },
  signupButton: {
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  signupButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginText: {
    color: "#254336",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default SignupScreen;

