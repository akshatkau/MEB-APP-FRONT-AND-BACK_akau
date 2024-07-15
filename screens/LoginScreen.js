import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("Dashboard"); // Navigate to the 'Main' stack screen named 'Home'
  };

  const handleLogin = () => {
    navigation.navigate("Log"); // Navigate to the 'Login' screen
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Top Row Container */}
          <View style={styles.topRow}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.titleText}>MyEasyPharma</Text>
          </View>
          {/* Sign Up Text */}
          <Text style={styles.signUpText}>SignUp</Text>
          {/* Email Label */}
          <Text style={styles.labelText}>Email</Text>
          {/* Email Input */}
          <TextInput style={styles.input} placeholder="Enter your email" />
          {/* Username Label */}
          <Text style={styles.labelText}>Username</Text>
          {/* Username Input */}
          <TextInput style={styles.input} placeholder="Enter your username" />
          {/* Password Label */}
          <Text style={styles.labelText}>Password</Text>
          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          {/* Forgotten Password text */}
          <Text style={styles.forgotPassword}>Forgotten Password?</Text>
          {/* Agreement text */}
          <Text style={styles.agreementText}>
            By creating an account you are agreeing to our{" "}
            <Text style={styles.underline}>Terms of Service</Text> and{" "}
            <Text style={styles.underline}>Privacy Policy</Text>.
          </Text>
          {/* Signup button */}
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignUp} // Call handleSignUp function on press
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
          {/* Already have an account text */}
          <TouchableOpacity onPress={handleLogin}>
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
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Light overlay with 70% opacity
  },
  container: {
    flex: 1,
    paddingTop: 50, // Adjust this value to give some top padding
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20, // Adjust this value for horizontal spacing
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
    flex: 1, // Center align the text
  },
  signUpText: {
    color: "#254336",
    fontSize: 26,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: "serif", // Use system font here
    fontWeight: "bold", // Increase the thickness
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

export default LoginScreen;
