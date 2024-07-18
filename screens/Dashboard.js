import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Dashboard</Text>
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

          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Update Data Button */}
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={styles.buttonText}>Update Data</Text>
            </TouchableOpacity>

            {/* Green Box with Text */}
            <View style={styles.greenBox}>
              <Text style={styles.greenBoxText}>
                Hello User,{"\n"}
                Have a nice day and don't forget to take care of your health!
                {"\n"}
                Learn More
              </Text>
            </View>

            {/* User Details Box */}
            <View style={styles.userDetailsBox}>
              <Image
                source={require("../assets/edit.jpg")}
                style={styles.editImage}
              />
              <Text style={styles.userName}>User Name</Text>
              <Text style={styles.userAge}>Age: 20 years old</Text>
              <View style={styles.userInfoRow}>
                <Text style={styles.userInfo}>BITS GOA</Text>
                <Text style={styles.userInfo}>Blood: B+</Text>
                <Text style={styles.userInfo}>Height: 174 cm</Text>
                <Text style={styles.userInfo}>Weight: 70 kg</Text>
              </View>
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
          </ScrollView>
        </View>
      </View>

      {/* Update Data Button - Positioned at the bottom */}
      <TouchableOpacity
        style={styles.updateButtonBottom}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Update Data</Text>
      </TouchableOpacity>
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
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    marginRight: 50, // Adjust spacing between logo and text
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 100, // Adjust this value to balance the spacing
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
  updateButton: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#254336", // Blue color for update button
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  greenBox: {
    backgroundColor: "#D7DFD5", // Green box color
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "95%", // Adjust width as needed
    alignSelf: "center",
  },
  greenBoxText: {
    color: "#254336",
    fontSize: 16,
  },
  userDetailsBox: {
    backgroundColor: "#D7DFD5",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "95%",
    alignSelf: "center",
  },
  editImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  userAge: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  userInfo: {
    fontSize: 14,
    textAlign: "center",
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
  updateButtonBottom: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#254336", // Blue color for update button
    borderRadius: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Adjust to accommodate the button height and additional space
  },
});

export default Dashboard;
