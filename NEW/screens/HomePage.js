import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const servicesRef = useRef(null);
  const handleGetStarted = () => {
    navigation.navigate("SignUp");
  };

  const handleScrollToServices = () => {
    servicesRef.current.measureLayout(scrollViewRef.current, (x, y) => {
      scrollViewRef.current.scrollTo({ y: y, animated: true });
    });
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollContainer}
          >
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.titleBold}>MyEasyPharma</Text>
              </View>
              <Text style={styles.subtitle}>
                AI Curated Corporate Wellness Program
              </Text>
              <Image
                source={require("../assets/homepage.png")}
                style={styles.image}
              />
              <TouchableOpacity
                style={[styles.button, styles.margin]}
                onPress={handleGetStarted}
              >
                <Text style={styles.buttonText}>Get started for free</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.bottomButton}
                onPress={handleScrollToServices}
              >
                <Text style={styles.bottomText}>Our Services</Text>
              </TouchableOpacity>

              {/* Service Boxes */}
              <View ref={servicesRef} style={styles.serviceBox}>
                <View style={styles.serviceContent}>
                  <Image
                    source={require("../assets/service1.png")}
                    style={styles.serviceImage}
                  />
                  <Text style={styles.serviceText}>
                    Delivering health and wellness by Ayush
                  </Text>
                </View>
              </View>

              <View style={styles.serviceBox}>
                <View style={styles.serviceContent}>
                  <Image
                    source={require("../assets/service2.png")}
                    style={styles.serviceImage}
                  />
                  <Text style={styles.serviceText}>
                    Personalised Health plan for employees
                  </Text>
                </View>
              </View>

              <View style={styles.serviceBox}>
                <View style={styles.serviceContent}>
                  <Image
                    source={require("../assets/service3.png")}
                    style={styles.serviceImage}
                  />
                  <Text style={styles.serviceText}>
                    Enable productive and healthier corporates!
                  </Text>
                </View>
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
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light overlay with 70% opacity
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingLeft: 30,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#254336",
  },
  titleBold: {
    fontSize: 24,
    color: "#254336",
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#254336",
    paddingLeft: 30,
    paddingBottom: 40,
    marginTop: 30,
  },
  image: {
    height: 310,
    width: 372,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#6B8A7A",
    padding: 5,
    borderRadius: 15,
    width: 180,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  bottomButton: {
    backgroundColor: "#E2E2E2",
    width: 160,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    alignSelf: "center",
    marginBottom: 60, // Increased bottom margin for more spacing
  },
  bottomText: {
    fontSize: 16,
    textAlign: "center",
  },
  serviceBox: {
    backgroundColor: "#254336", // Changed to solid color
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 30,
    width: "80%", // Set width to 80% of the container
    alignSelf: "center", // Center horizontally
  },
  serviceContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  serviceImage: {
    width: 111,
    height: 197,
    resizeMode: "contain",
    marginBottom: 10, // Added margin bottom for spacing
  },
  serviceText: {
    color: "white",
    fontSize: 18, // Increased font size
    textAlign: "center",
  },
});

export default HomePage;
