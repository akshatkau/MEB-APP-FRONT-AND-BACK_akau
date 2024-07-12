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
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.topRow}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Contact Us</Text>
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
          <Text style={styles.bodyText}>
            Email: info@myeasypharma.in{"\n"}Phone: +91-9315909654
          </Text>
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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
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
    marginBottom: 20,
  },
  logo: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    marginRight: 80,
  },
  titleText: {
    color: "#254336",
    fontSize: 26,
    fontWeight: "700",
    marginRight: 115,
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
});

export default ContactUs;
