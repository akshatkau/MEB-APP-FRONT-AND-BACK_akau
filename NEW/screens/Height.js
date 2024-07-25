import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

const Height = () => {
  const navigation = useNavigation();
  const [selectedHeight, setSelectedHeight] = useState(160);
  const flatListRef = useRef(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Scroll to the initial height (160 cm) when the component mounts
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: (160 - 100) * (width / 5) - width / 2 + width / 10,
          animated: true,
        });
      }
    }, 100);
  }, []);
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

  const handleContinue = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/api/v1/users/${userId}/health`,
        {
          height: selectedHeight,
        }
      );
      Alert.alert("Selected Height", `You selected: ${selectedHeight}`);
      navigation.navigate("Weight");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", `Failed to update blood type: ${error.message}`);
    }
  };

  const renderHeightItem = ({ item }) => (
    <View style={styles.heightItem}>
      <Text
        style={[
          styles.heightText,
          item === selectedHeight && styles.selectedHeightText,
        ]}
      >
        {item}
      </Text>
    </View>
  );

  const getItemLayout = (data, index) => ({
    length: width / 5,
    offset: (width / 5) * index,
    index,
  });

  const onScrollToIndexFailed = (info) => {
    const wait = new Promise((resolve) => setTimeout(resolve, 500));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    });
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back" size={30} color="#254336" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Weight")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>What's your Height?</Text>

          <View style={styles.selectedHeightContainer}>
            <Text style={styles.selectedHeightDisplay}>
              {selectedHeight} <Text style={styles.cmText}>cm</Text>
            </Text>
          </View>

          <View style={styles.heightContainer}>
            <FlatList
              ref={flatListRef}
              data={Array.from({ length: 101 }, (_, i) => i + 100)}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.toString()}
              renderItem={renderHeightItem}
              contentContainerStyle={styles.heightList}
              snapToInterval={width / 5}
              decelerationRate="fast"
              getItemLayout={getItemLayout}
              onScrollToIndexFailed={onScrollToIndexFailed}
              onScroll={(e) => {
                const index = Math.round(
                  e.nativeEvent.contentOffset.x / (width / 5)
                );
                setSelectedHeight(index + 100);
              }}
              initialScrollIndex={60} // Start with 160 cm highlighted (160 - 100 = 60)
            />
          </View>

          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
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
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 65,
    left: 15,
  },
  skipText: {
    position: "absolute",
    top: -214,
    right: 15,
    fontSize: 18,
    color: "#254336",
  },
  titleText: {
    color: "#254336",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -100,
    marginBottom: 40,
  },
  selectedHeightContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  cmText: {
    fontSize: 24,
    fontWeight: "normal",
  },
  selectedHeightDisplay: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#254336",
    marginBottom: 40,
    marginLeft: 50,
    marginTop: 10,
    top: -10,
  },
  heightContainer: {
    marginBottom: 20,
  },
  heightList: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: (width - width / 5) / 2,
  },
  heightItem: {
    width: width / 5,
    alignItems: "center",
    justifyContent: "center",
  },
  heightText: {
    fontSize: 32,
    color: "#254336",
    textAlign: "center",
  },
  selectedHeightText: {
    fontWeight: "600",
    fontSize: 42,
  },
  continueButton: {
    backgroundColor: "#254336",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
    marginLeft: 60,
    width: "70%",
  },
  continueButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Height;
