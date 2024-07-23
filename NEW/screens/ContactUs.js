import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ContactUs = () => {
  const handleLinkedInPress = () => {
    Linking.openURL("https://www.linkedin.com/company/myeasypharma/");
  };
  const handleWhatsappPress = () => {
    Linking.openURL("https://chat.whatsapp.com/GZtdT46ZgZq2FzxXd9l8rE");
  };
  const handleEmailPress = () => {
    Linking.openURL("mailto:info@myeasypharma.in");
  };

  const handlePhonePress = () => {
    Linking.openURL("tel:+919315909654");
  };
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.topRow}>
            {/*<TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Contact Us</Text>
          </View>*/}
            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back" size={30} color="#254336" />
            </TouchableOpacity>
            <Text style={styles.titleText}>Contact Us</Text>
            <View style={styles.logoContainer}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </View>
          </View>

          <Text style={styles.bodyText}>
            Have questions about our products, support services, or anything
            else? Let us know and we'll get back to you.
          </Text>
          <Text style={styles.sectionHeader}>Corporate Address</Text>
          <Text style={styles.bodyText}>
            MyEasyPharma Pvt Ltd Unit 101, Oxford Towers 139, HAL Old Airport Rd
            H.A.L II Stage Bangalore, Karnataka, India, 560008
          </Text>
          <Text style={styles.sectionHeader}>Operations Address</Text>
          <Text style={styles.bodyText}>
            252, Upper Ground Floor Deepali, Pitampura, Delhi-110034
          </Text>
          <Text style={styles.sectionHeader}>Contact</Text>
          <View style={styles.contactContainer}>
            <Text style={styles.bodyText}>
              Email:{" "}
              <TouchableOpacity onPress={handleEmailPress}>
                <Text style={styles.linkText}>info@myeasypharma.in</Text>
              </TouchableOpacity>
            </Text>
            <Text style={styles.bodyText}>
              Phone:{" "}
              <TouchableOpacity onPress={handlePhonePress}>
                <Text style={styles.linkText}>+91-9315909654</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <Text style={styles.sectionHeader}>Connect</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleLinkedInPress}>
              <AntDesign
                name="linkedin-square"
                size={24}
                color="#0077B5"
                style={styles.LinkedinIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleWhatsappPress}>
              <FontAwesome5
                name="whatsapp"
                size={24}
                color="#25D366"
                style={styles.WhatsappIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  container: {
    flexGrow: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 15,
  },
  titleText: {
    color: "#254336",
    fontSize: 26,
    fontWeight: "700",
    marginRight: 60,
    marginLeft: 89,
  },
  bodyText: {
    color: "#254336",
    fontSize: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    color: "#254336",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  LinkedinIcon: {
    //padding: 10,
    marginLeft: 10,
    fontSize: 43,
    marginRight: 15,
  },
  WhatsappIcon: {
    marginLeft: 10,
    fontSize: 43,
    //marginRight: 10,
  },
  linkText: {
    color: "#007AFF",
    textDecorationLine: "underline",
    fontSize: 19,
  },
  contactContainer: {
    marginBottom: 10,
  },
});

export default ContactUs;
