import React, { useEffect, useState } from "react";
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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { FontAwesome6 } from "@expo/vector-icons";

const Dashboard = () => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState({ username: "" });
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [blood, setBlood] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
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

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/v1/users/${userId}/health`
          );

          console.log(response.data);
          // Update states with the response data
          setUserDetails(response.data);
          setUserName(response.data.name);
          setAge(response.data.age);
          setBlood(response.data.bloodGroup);
          setHeight(response.data.height);
          setWeight(response.data.weight);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

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
              <TouchableOpacity onPress={() => navigation.navigate("")}>
                <Ionicons
                  name="notifications-sharp"
                  size={24}
                  color="black"
                  style={styles.notificationIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <MaterialIcons
                  name="settings"
                  size={24}
                  color="black"
                  style={styles.settingsIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Update Data Button */}
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => navigation.navigate("DailySteps")}
            >
              <Text style={styles.buttonText}>Update Data</Text>
            </TouchableOpacity>

            {/* Green Box with Text */}
            <View style={styles.greenBox}>
              <Text style={styles.greenBoxText}>
                Hello {userName},{"\n"} {/* Display username here */}
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
              <Text style={styles.userName}>{userName}</Text>
              {/* Display fetched username */}
              <Text style={styles.userAge}>
                <Text style={styles.label}>Age: </Text>
                <Text style={styles.bold}>{age}</Text> years old
              </Text>
              <View style={styles.userInfoRow}>
                <Text style={styles.userInfo}>
                  <Text style={styles.label}>Blood: </Text>
                  <Text style={styles.bold}>{blood} </Text>
                </Text>
                <Text style={styles.userInfo}>
                  <Text style={styles.label}>Height: </Text>
                  <Text style={styles.bold}>{height}</Text> cm
                </Text>
                <Text style={styles.userInfo}>
                  <Text style={styles.label}> Weight: </Text>
                  <Text style={styles.bold}>{weight}</Text> kg
                </Text>
              </View>
            </View>

            {/* Graph Image */}
            <Image
              source={require("../assets/graph.jpg")}
              style={styles.graphImage}
            />

            {/* Updated Parameters Row with Icons */}
            <View style={styles.parametersRow}>
              <View style={styles.parameterBox}>
                <Ionicons name="footsteps" size={24} color="#254336" />
                <Text style={styles.parameterValue}>500/3000</Text>
                <Text style={styles.parameterDescription}>steps taken</Text>
              </View>
              <View style={styles.parameterBox}>
                <FontAwesome6 name="fire" size={24} color="#254336" />
                <Text style={styles.parameterValue}>408 kcal</Text>
                <Text style={styles.parameterDescription}>burned</Text>
              </View>
              <View style={styles.parameterBox}>
                <Ionicons name="water-sharp" size={24} color="#254336" />
                <Text style={styles.parameterValue}>1.5 litres</Text>
                <Text style={styles.parameterDescription}>water taken</Text>
              </View>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay with 70% opacity
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
    marginRight: 30,
    marginLeft: 60, // Adjust spacing between logo and text
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 40,
    marginRight: 50, // Adjust this value to balance the spacing
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
    backgroundColor: "rgba(215, 223, 213,0.5)", // Green box color
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
    backgroundColor: "rgba(215, 223, 213,0.5)",
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#254336",
    textAlign: "center",
  },
  userAge: {
    fontSize: 18,
    color: "#254336",
    textAlign: "center",
    marginTop: 5,
  },
  userAgeBold: {
    fontWeight: "400",
  },
  userInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  userInfo: {
    fontSize: 18,
    color: "#254336",
  },
  label: {
    color: "#555", // Change this color as needed
  },
  bold: {
    fontWeight: "bold",
    color: "#254336", // You can change this color if needed
  },
  graphImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  parametersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  parameterBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(215, 223, 213,0.5)",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 5,
  },
  parameterValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  parameterDescription: {
    fontSize: 14,
    color: "#666",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 1,
    marginBottom: 20,
  },
  remindersImage: {
    width: 140,
    height: 100,
    resizeMode: "contain",
  },
  reportsImage: {
    width: 140,
    height: 100,
    resizeMode: "contain",
  },
  updateButtonBottom: {
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#254336",
    borderRadius: 30,
  },
  scrollContainer: {
    paddingBottom: 100,
  },
});

export default Dashboard;
