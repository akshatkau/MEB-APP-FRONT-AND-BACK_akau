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
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const LogIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/auth/login",
        {
          username,
          password,
        }
      );
      console.log("Login successful:", response.data);
      Alert.alert("Login successful!");

      // Log the entire response for debugging
      console.log("Full response:", response);

      // Verify that the token is present in the response
      const { token } = response.data;
      console.log(response);
      if (!token) {
        throw new Error("Token is missing from the response");
      }

      // Store the token securely in AsyncStorage
      await storeToken(token);

      navigation.navigate("Main");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login failed", "Invalid username or password");
    }
  };

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("userToken", token);
      console.log("Token stored successfully");
    } catch (e) {
      console.error("Failed to save the token to the storage", e);
    }
  };

  const handleFacebookLogin = () => {
    // Logic for Facebook login
  };

  const handleGoogleLogin = () => {
    // Logic for Google login
    navigation.navigate("Main");
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
          <Text style={styles.signUpText}>Log In</Text>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.divider} />
          </View>
          <TouchableOpacity
            style={[styles.loginButton, styles.facebookButton]}
            onPress={handleFacebookLogin}
          >
            <FontAwesome name="facebook" size={20} color="white" />
            <Text style={styles.loginButtonText}> Log in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.loginButton, styles.googleButton]}
            onPress={handleGoogleLogin}
          >
            <AntDesign name="google" size={20} color="white" />
            <Text style={styles.loginButtonText}> Log in with Google</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            Don't have an account?{" "}
            <Text style={styles.underline} onPress={handleSignUp}>
              Sign Up
            </Text>
          </Text>
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
  loginButton: {
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 25,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  loginText: {
    color: "#254336",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
  underline: {
    textDecorationLine: "underline",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#254336",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#254336",
  },
  facebookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#DB4437",
  },
});

export default LogIn;
