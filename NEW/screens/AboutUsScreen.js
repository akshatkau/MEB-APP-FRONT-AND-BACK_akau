import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const AboutUsScreen = () => {
  const navigation = useNavigation();
  const [showVision, setShowVision] = useState(false);
  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const [showMission, setShowMission] = useState(false);

  const toggleVision = () => setShowVision(!showVision);
  const toggleWhatWeDo = () => setShowWhatWeDo(!showWhatWeDo);
  const toggleMission = () => setShowMission(!showMission);

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Top Row Container */}
          <View style={styles.topRow}>
            {/*<TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}> About Us</Text>
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
            </View>*/}
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back" size={30} color="#254336" />
            </TouchableOpacity>
            <Text style={styles.titleText}>About Us</Text>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </View>
          </View>
          {/* Content Container */}
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.contentContainer}>
              <Text style={styles.descriptionText}>
                MyEasyPharma is leading the way in integrating technology with
                healthcare to revolutionize preventive health for working
                professionals. We offer holistic solutions that combine
                traditional Ayurveda with modern medicine, supported by research
                tailored to your health profile and specific conditions.
              </Text>
              {/* Vision Section */}
              <View style={styles.section}>
                {/* Vision Title */}
                <TouchableOpacity
                  style={styles.titleContainer}
                  onPress={toggleVision}
                >
                  <Text style={styles.sectionTitle}>Vision</Text>
                  <Image
                    source={require("../assets/vision.png")}
                    style={styles.vision}
                  />
                </TouchableOpacity>
                {/* Vision Text */}
                {showVision && (
                  <Text style={styles.sectionText}>
                    At MyEasyPharma, our vision is to create a one-stop
                    destination to take care of your health and well-being amid
                    a busy schedule, backed by research and integrated with AI
                    support. To pioneer a shift in global health paradigms,
                    focusing not just on treating illnesses but on preventing
                    them before they occur. Our primary aim is to improve
                    employee health, leading to increased and enhanced
                    efficiency in the workplace.
                  </Text>
                )}
              </View>
              {/* What We Do Section */}
              <View style={styles.section}>
                {/* What We Do Title */}
                <TouchableOpacity
                  style={styles.titleContainer}
                  onPress={toggleWhatWeDo}
                >
                  <Text style={styles.sectionTitle}>What We Do</Text>
                  <Image
                    source={require("../assets/steth.png")}
                    style={styles.stethImage}
                  />
                </TouchableOpacity>
                {/* What We Do Text */}
                {showWhatWeDo && (
                  <Text style={styles.sectionText}>
                    We offer comprehensive professional health advice on various
                    parameters such as diet, physical activity, mental health,
                    sleep hygiene, from trivial yet important conditions like
                    back pain to serious conditions like cancer, all aimed at
                    reducing susceptibility to workplace-induced lifestyle
                    disorders and managing at holistic level. Our guidance is
                    personalized to your environment or Prakriti.
                  </Text>
                )}
              </View>
              {/* Mission Section */}
              <View style={styles.section}>
                {/* Mission Title */}
                <TouchableOpacity
                  style={styles.titleContainer}
                  onPress={toggleMission}
                >
                  <Text style={styles.sectionTitle}>Mission</Text>
                  <Image
                    source={require("../assets/mission.png")}
                    style={styles.missionImage}
                  />
                </TouchableOpacity>
                {/* Mission Text */}
                {showMission && (
                  <Text style={styles.sectionText}>
                    Our mission is to alleviate the impact of chronic diseases,
                    their symptoms and enhance public health by delivering
                    specialized and meticulously curated corporate wellness
                    initiatives.
                  </Text>
                )}
              </View>
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
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay with 70% opacity
  },
  container: {
    flex: 1,
    paddingTop: 50, // Adjust this value to give some top padding
    paddingHorizontal: 20, // Adjust this value for horizontal spacing
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically in the row
    justifyContent: "space-between", // Space evenly between items
    marginBottom: 20, // Optional margin bottom for spacing
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: -160,
    marginLeft: 80,
  },
  titleText: {
    color: "#254336",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 90,
    textAlign: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20, // Adjust this value to give some bottom padding for the last section
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  descriptionText: {
    color: "#254336",
    fontSize: 21,
    fontWeight: "500",
    marginTop: 20,
    marginHorizontal: 20,
    lineHeight: 29,
    //textAlign: "center",
  },
  section: {
    width: "90%", // Adjust the width of sections as needed
    marginTop: 20,
    marginBottom: 20, // Adjust margin between sections as needed
    alignItems: "center", // Center content horizontally
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%", // Ensure title container takes full width
    backgroundColor: "#25433640", // Green background color
    paddingVertical: 5, // Vertical padding around title
    paddingHorizontal: 10, // Horizontal padding around title
    borderRadius: 5, // Optional: Add rounded corners
  },
  sectionTitle: {
    color: "#254336",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center", // Center the text
    marginRight: 10, // Adjust spacing between title and image if needed
  },
  vision: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  stethImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  missionImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  sectionText: {
    color: "#254336",
    fontSize: 22,
    marginTop: 10,
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto", // Move icons to the right
    marginRight: 20, // Adjust spacing between icons and title
  },
  notificationIcon: {
    padding: 10,
    marginLeft: 40,
  },
  settingsIcon: {
    padding: 10,
    marginLeft: 10, // Adjust spacing between icons
  },
  backButton: {
    marginLeft: -110,
    padding: 5, // Adjust the value as needed
  },
});

export default AboutUsScreen;
