import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

const Profile = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
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

  const incrementValue = (value, setter) => setter(value + 1);
  const decrementValue = (value, setter) => setter(value > 0 ? value - 1 : 0);

  const handleEditProfilePic = () => {
    // Handle edit profile picture action here
    console.log("Edit profile picture");
  };

  const handleSubmit = () => {
    // Handle the submit action here
    navigation.navigate("Dashboard");
    console.log("Profile submitted");
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
            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
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
                  source={require("../assets/edit.jpg")}
                  style={styles.profilePic}
                />
                <Ionicons
                  name="create-outline"
                  size={24}
                  color="#8BBE78"
                  style={styles.editIcon}
                />
              </TouchableOpacity>
              <Text style={styles.profilePicText}>Hello, User Name!</Text>

              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Enter your email"
              />

              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
              />

              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Enter your password"
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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
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
