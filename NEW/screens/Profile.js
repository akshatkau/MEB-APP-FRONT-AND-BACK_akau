import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const Profile = () => {
  const navigation = useNavigation();
  const [tokenValid, setTokenValid] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState(167);
  const [weight, setWeight] = useState(66);
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(34);
  const [bloodGroup, setBloodGroup] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ]);

  const [profilePicUri, setProfilePicUri] = useState(null);
  const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
  const [userId, setUserId] = useState(null);

  const checkTokenValidity = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");

      if (!token) {
        setTokenValid(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Current time in seconds

      if (decodedToken.exp < currentTime) {
        setTokenValid(false);
        await AsyncStorage.removeItem("authToken");
        navigation.navigate("Login");
        return;
      }

      setTokenValid(true);
    } catch (error) {
      console.error("Error checking token validity:", error);
      setTokenValid(false);
    }
  };

  const fetchUserId = async () => {
    try {
      await checkTokenValidity();
      const token = await AsyncStorage.getItem("authToken");

      if (!token || !tokenValid) {
        throw new Error("No valid token found");
      }

      const response = await axios.get("http://localhost:3001/api/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserId(response.data.userId);
      setUserName(response.data.username);
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      await fetchUserId();
      if (!userId) return;

      const token = await AsyncStorage.getItem("authToken");
      const response = await axios.get(
        `http://localhost:3001/api/v1/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userProfileData = response.data;
      setUserEmail(userProfileData.email);
      setHeight(userProfileData.height);
      setWeight(userProfileData.weight);
      setPhone(userProfileData.phone);
      setAge(userProfileData.age);
      setBloodGroup(userProfileData.bloodGroup);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const incrementValue = (value, setter) => setter(value + 1);
  const decrementValue = (value, setter) => setter(value > 0 ? value - 1 : 0);

  const handleEditProfilePic = () => {
    setIsEditingProfilePic(true); // Set editing state to true
    console.log("Editing profile picture...");
  };

  const handleSubmit = async () => {
    try {
      await saveProfileData();
      navigation.navigate("Main", {
        updatedProfile: {
          username: userName,
          email: userEmail,
          phone: phone,
          height: height,
          weight: weight,
          age: age,
          bloodGroup: bloodGroup,
        },
      });
      console.log("Profile submitted");
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  const saveProfileData = async () => {
    try {
      const profileData = {
        username: userName,
        email: userEmail,
        password: password,
        height: height,
        weight: weight,
        phone: phone,
        age: age,
        bloodGroup: bloodGroup,
      };

      const token = await AsyncStorage.getItem("authToken");
      if (!token || !tokenValid) {
        throw new Error("No valid token found");
      }

      const response = await fetch(
        `http://localhost:3001/api/v1/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(profileData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save profile data");
      }

      console.log("Profile data saved successfully");
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
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
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
              <MaterialIcons name="arrow-back" size={30} color="#254336" />
            </TouchableOpacity>
            <Text style={styles.titleText}>User Profile</Text>
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </View>
          </View>
          {/* Profile Content */}
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              <TouchableOpacity onPress={handleEditProfilePic}>
                <Image
                  source={
                    profilePicUri
                      ? { uri: profilePicUri }
                      : require("../assets/edit.jpg")
                  }
                  style={styles.profilePic}
                />
                <Ionicons
                  name="create-outline"
                  size={24}
                  color="#8BBE78"
                  style={styles.editIcon}
                />
              </TouchableOpacity>
              <Text style={styles.profilePicText}>Hello, Jane{username}!</Text>

              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={userEmail}
                onChangeText={setUserEmail}
                keyboardType="email-address"
                placeholder="Enter your email"
              />

              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={styles.input}
                value={userName}
                onChangeText={setUserName}
                placeholder="Enter your username"
              />

              <Text style={styles.label}>Phone Number:</Text>
              <View style={styles.phoneContainer}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="numeric"
                  placeholder="Enter your phone number"
                />
                <TouchableOpacity style={styles.sendOtpButton}>
                  <Text style={styles.sendOtpText}>Send OTP</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Height (cm):</Text>
              <View style={styles.incrementContainer}>
                <TouchableOpacity
                  style={[styles.incrementButton, styles.incrementButtonLeft]}
                  onPress={() => decrementValue(height, setHeight)}
                >
                  <Text style={styles.incrementButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.incrementInput}
                  value={String(height)}
                  onChangeText={(text) => setHeight(parseInt(text))}
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={[styles.incrementButton, styles.incrementButtonRight]}
                  onPress={() => incrementValue(height, setHeight)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Weight (kg):</Text>
              <View style={styles.incrementContainer}>
                <TouchableOpacity
                  style={[styles.incrementButton, styles.incrementButtonLeft]}
                  onPress={() => decrementValue(weight, setWeight)}
                >
                  <Text style={styles.incrementButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.incrementInput}
                  value={String(weight)}
                  onChangeText={(text) => setWeight(parseInt(text))}
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={[styles.incrementButton, styles.incrementButtonRight]}
                  onPress={() => incrementValue(weight, setWeight)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Age:</Text>
              <View style={styles.incrementContainer}>
                <TouchableOpacity
                  style={[styles.incrementButton, styles.incrementButtonLeft]}
                  onPress={() => decrementValue(age, setAge)}
                >
                  <Text style={styles.incrementButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.incrementInput}
                  value={String(age)}
                  onChangeText={(text) => setAge(parseInt(text))}
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={[styles.incrementButton, styles.incrementButtonRight]}
                  onPress={() => incrementValue(age, setAge)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bloodGroup}>
                <Text style={styles.label}>Blood Group:</Text>
                <DropDownPicker
                  open={open}
                  value={bloodGroup}
                  items={items}
                  setOpen={setOpen}
                  setValue={setBloodGroup}
                  setItems={setItems}
                  style={pickerSelectStyles.dropdown}
                  containerStyle={styles.dropDownContainer}
                />
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const pickerSelectStyles = StyleSheet.create({
  dropdown: {
    borderColor: "#254336",
  },
});

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
    paddingHorizontal: 20,
    alignItems: "center",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  logoContainer: {
    resizeMode: "contain",
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  profilePic: {
    width: 110,
    height: 110,
    borderRadius: 40,
    marginBottom: 15,
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
  profilePicText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  label: {
    fontSize: 19,
    color: "#254336",
    marginBottom: 3,
    textAlign: "left",
    width: "90%",
    fontWeight: "500",
    marginTop: 3,
  },
  input: {
    height: 40,
    borderColor: "#254336",
    borderWidth: 1.5,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: "90%",
    fontSize: 17,
    color: "#254336",
    marginBottom: 30,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  sendOtpButton: {
    backgroundColor: "#254336",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    marginBottom: 25,
  },
  sendOtpText: {
    color: "white",
    fontSize: 16,
  },
  incrementContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    width: "90%", // Adjusted width to 90% for consistent spacing
  },
  incrementButton: {
    backgroundColor: "#254336",
    borderRadius: 15,
    padding: 5, // Adjusted padding to 5
    width: 30, // Adjusted width to 30 for smaller buttons
    alignItems: "center",
    justifyContent: "center",
  },
  incrementButtonLeft: {
    marginRight: 5, // Added margin for left button
  },
  incrementButtonRight: {
    marginLeft: 5, // Added margin for right button
  },
  incrementButtonText: {
    color: "white",
    fontSize: 20,
  },
  incrementInput: {
    height: 40,
    borderColor: "#254336",
    borderWidth: 1.5,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#254336",
    textAlign: "center",
    width: "40%", // Adjusted width to 40% for input field
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: "#254336",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
  },
  bloodGroup: {
    marginBottom: 18,
    width: "90%", // Added width to bloodGroup container
  },
});

export default Profile;
