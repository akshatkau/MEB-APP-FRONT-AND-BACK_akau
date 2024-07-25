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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";

const Profile = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
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

  useEffect(() => {
    const getUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem("userId");
        if (storedUserId) {
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
      fetchUserData();
      fetchUserProfile();
    }
  }, [userId]);

  const fetchUserProfile = async () => {
    try {
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
      setUserName(userProfileData.username);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      const response = await axios.get(
        `http://localhost:3001/api/v1/users/${userId}/health`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userProfileData = response.data;
      setName(userProfileData.name);
      setHeight(userProfileData.height);
      setWeight(userProfileData.weight);
      setPhone(userProfileData.phone);
      setAge(userProfileData.age);
      setBloodGroup(userProfileData.bloodGroup);
    } catch (error) {
      console.error("Error fetching user health data:", error);
    }
  };

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
          name: name,
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
        name: name,
        height: height,
        weight: weight,
        phone: phone,
        age: age,
        bloodGroup: bloodGroup,
      };

      const token = await AsyncStorage.getItem("authToken");
      if (!token) {
        throw new Error("No valid token found");
      }

      const response = await axios.patch(
        `http://localhost:3001/api/v1/users/${userId}/health`,
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.status === 200) {
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
              <Text style={styles.profilePicText}>Hello, {name}!</Text>

              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={userEmail}
                onChangeText={setUserEmail}
                keyboardType="email-address"
                placeholder="Enter your email"
              />
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your Name"
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
                {/*<TouchableOpacity style={styles.sendOtpButton}>
                  <Text style={styles.sendOtpText}>Send OTP</Text>
                </TouchableOpacity>*/}
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

              <Text style={styles.label}>Blood Group:</Text>
              <DropDownPicker
                open={open}
                value={bloodGroup}
                items={items}
                setOpen={setOpen}
                setValue={setBloodGroup}
                setItems={setItems}
                placeholder="Select your blood group"
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownStyle={styles.dropdownList}
              />

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // You can adjust the opacity as needed
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#254336",
    flex: 1,
    textAlign: "center",
  },
  logoContainer: {
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  contentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 10,
    marginTop: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginRight: 50,
    marginLeft: 110,
  },
  editIcon: {
    position: "absolute",
    bottom: 10,
    right: 105,
  },
  profilePicText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#254336",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#254336",
  },
  input: {
    borderWidth: 1,
    borderColor: "#8BBE78",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  sendOtpButton: {
    backgroundColor: "#8BBE78",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  sendOtpText: {
    color: "#fff",
    fontWeight: "bold",
  },
  incrementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  incrementButton: {
    backgroundColor: "#8BBE78",
    padding: 10,
    borderRadius: 10,
  },
  incrementButtonLeft: {
    marginRight: 10,
  },
  incrementButtonRight: {
    marginLeft: 10,
  },
  incrementButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  incrementInput: {
    borderWidth: 1,
    borderColor: "#8BBE78",
    borderRadius: 10,
    padding: 10,
    flex: 1,
    textAlign: "center",
  },
  dropdownContainer: {
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#8BBE78",
    borderRadius: 10,
  },
  dropdownList: {
    borderColor: "#8BBE78",
  },
  submitButton: {
    backgroundColor: "#8BBE78",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Profile;
