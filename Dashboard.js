import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Dashboard</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../assets/notification.png")}
              style={styles.notificationIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../assets/settings.png")}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Graph Image */}
        <Image
          source={require("../assets/graph.jpg")}
          style={styles.graphImage}
        />

        {/* Parameters Row */}
        <View style={styles.parametersRow}>
          <Image
            source={require("../assets/steps.jpg")}
            style={styles.parameterImage}
          />
          <Image
            source={require("../assets/calories.jpg")}
            style={styles.parameterImage}
          />
          <Image
            source={require("../assets/water.jpg")}
            style={styles.parameterImage}
          />
        </View>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <Image
            source={require("../assets/reminders.jpg")}
            style={styles.remindersImage}
          />
          <Image
            source={require("../assets/reports.jpg")}
            style={styles.reportsImage}
          />
        </View>

        {/* Add New Data Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>Add New Data</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
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
    flex: 1,
  },
  iconContainer: {
    padding: 10,
  },
  notificationIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  settingsIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  graphImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  parametersRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  parameterImage: {
    width: 120,
    height: 100,
    resizeMode: "contain",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  remindersImage: {
    width: 180,
    height: 150,
    resizeMode: "contain",
  },
  reportsImage: {
    width: 160,
    height: 150,
    resizeMode: "contain",
  },
  addButton: {
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28A745",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default Dashboard;
