import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.topRow}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.titleText}>MyEasyPharma</Text>
            <View style={styles.iconContainer}>
              <Ionicons
                name="notifications-sharp"
                size={24}
                color="black"
                style={styles.notificationIcon}
              />
              <MaterialIcons
                name="settings"
                size={24}
                color="black"
                style={styles.settingsIcon}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AboutUs")}
          >
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Blog")}
          >
            <Text style={styles.buttonText}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FAQ")}
          >
            <Text style={styles.buttonText}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ContactUs")}
          >
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 20, // Adjust this value for horizontal spacing
    alignItems: "center", // Center content horizontally
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the row
    justifyContent: "space-between", // Space out items horizontally
    marginBottom: 20, // Optional margin bottom for spacing
    width: "100%", // Full width for the top row
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
    flex: 1, // Flex to center the text
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    padding: 10,
  },
  settingsIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
