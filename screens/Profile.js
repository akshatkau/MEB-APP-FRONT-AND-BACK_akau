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
import RNPickerSelect from "react-native-picker-select";

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

  const incrementValue = (value, setter) => setter(value + 1);
  const decrementValue = (value, setter) => setter(value > 0 ? value - 1 : 0);

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Top Row Container */}
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>User Profile</Text>
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
          {/* Profile Content */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.contentContainer}>
              <Image
                source={require("../assets/edit.jpg")}
                style={styles.profilePic}
              />
              <Text style={styles.profilePicText}>Hello, User Name!</Text>

              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
              />

              <Text style={styles.label}>Password:</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text style={styles.label}>Phone Number:</Text>
              <View style={styles.phoneContainer}>
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setPhone}
                  keyboardType="numeric"
                />
                <TouchableOpacity style={styles.sendOtpButton}>
                  <Text style={styles.sendOtpText}>Send OTP</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Height (cm):</Text>
              <View style={styles.incrementContainer}>
                <TouchableOpacity
                  style={styles.incrementButton}
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
                  style={styles.incrementButton}
                  onPress={() => incrementValue(height, setHeight)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Weight (kg):</Text>
              <View style={styles.incrementContainer}>
                <TouchableOpacity
                  style={styles.incrementButton}
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
                  style={styles.incrementButton}
                  onPress={() => incrementValue(weight, setWeight)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Age:</Text>
              <View style={styles.incrementContainer}>
                <TouchableOpacity
                  style={styles.incrementButton}
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
                  style={styles.incrementButton}
                  onPress={() => incrementValue(age, setAge)}
                >
                  <Text style={styles.incrementButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>Blood Group:</Text>
              <RNPickerSelect
                placeholder={{ label: "Select Blood Group", value: null }}
                items={[
                  { label: "A+", value: "A+" },
                  { label: "A-", value: "A-" },
                  { label: "B+", value: "B+" },
                  { label: "B-", value: "B-" },
                  { label: "AB+", value: "AB+" },
                  { label: "AB-", value: "AB-" },
                  { label: "O+", value: "O+" },
                  { label: "O-", value: "O-" },
                ]}
                onValueChange={(value) => setBloodGroup(value)}
                style={pickerSelectStyles}
                value={bloodGroup}
                useNativeAndroidPickerStyle={false}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
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
    justifyContent: "center",
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
    marginRight: 50,
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 40,
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 20,
  },
  notificationIcon: {
    padding: 10,
    marginLeft: 40,
  },
  settingsIcon: {
    padding: 10,
    marginLeft: 10,
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
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profilePicText: {
    fontSize: 18,
    color: "#254336",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#254336",
    marginVertical: 8,
    alignSelf: "flex-start",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    width: "80%",
  },
  incrementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  incrementButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E2E2E2",
    borderRadius: 20,
    marginHorizontal: 10,
  },
  incrementButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  incrementInput: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    width: 100,
    textAlign: "center",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    width: "80%",
  },
  sendOtpButton: {
    backgroundColor: "#28A745",
    padding: 10,
    borderRadius: 5,
  },
  sendOtpText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Profile;
