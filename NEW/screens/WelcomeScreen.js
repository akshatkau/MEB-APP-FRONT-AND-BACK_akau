import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to HomePage after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      navigation.navigate("HomePage"); // Ensure 'HomePage' matches the name used in your navigation setup
    }, 3000); // Change 3000 to the number of milliseconds you want

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <Image
              source={require("../assets/logo.png")} // Replace with your logo path
              style={styles.logo}
            />
            <Text style={styles.titleBold}>MyEasyPharma</Text>
            <Text style={styles.subtitle}>
              AI Curated Corporate Wellness Programs
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 227, 227, 0.5)", // #e4ebe4 with 70% opacity
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 70,
    marginTop: -40,
  },
  titleBold: {
    fontSize: 33,
    fontWeight: "bold",
    color: "#254336",
    marginBottom: 15,
    marginTop: -40,
  },
  subtitle: {
    fontSize: 19,
    color: "#254336",
    textAlign: "center",
  },
});

export default WelcomeScreen;
