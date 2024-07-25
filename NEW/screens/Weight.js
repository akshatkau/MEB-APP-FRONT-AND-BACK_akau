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

const Weight = () => {
  const navigation = useNavigation();
  const [selectedWeight, setSelectedWeight] = useState(60);
  const [userId, setUserId] = useState("");
  const flatListRef = useRef(null);

  useEffect(() => {
    // Scroll to the initial weight (60 kg) when the component mounts
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: (60 - 40) * (width / 5) - width / 2 + width / 10,
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
          weight: selectedWeight,
        }
      );
      Alert.alert("Selected Height", `You selected: ${selectedWeight}`);
      navigation.navigate("BloodType");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", `Failed to update weight: ${error.message}`);
    }
  };

  const renderWeightItem = ({ item }) => (
    <View style={styles.weightItem}>
      <Text
        style={[
          styles.weightText,
          item === selectedWeight && styles.selectedWeightText,
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
          <TouchableOpacity onPress={() => navigation.navigate("BloodType")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>What's your Weight?</Text>

          <View style={styles.selectedWeightContainer}>
            <Text style={styles.selectedWeightDisplay}>
              {selectedWeight} <Text style={styles.kgText}>kg</Text>
            </Text>
          </View>

          <View style={styles.weightContainer}>
            <FlatList
              ref={flatListRef}
              data={Array.from({ length: 161 }, (_, i) => i + 40)}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.toString()}
              renderItem={renderWeightItem}
              contentContainerStyle={styles.weightList}
              snapToInterval={width / 5}
              decelerationRate="fast"
              getItemLayout={getItemLayout}
              onScrollToIndexFailed={onScrollToIndexFailed}
              onScroll={(e) => {
                const index = Math.round(
                  e.nativeEvent.contentOffset.x / (width / 5)
                );
                setSelectedWeight(index + 40);
              }}
              initialScrollIndex={20} // Start with 60 kg highlighted (60 - 40 = 20)
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
    top: -220,
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
    marginBottom: 30,
  },
  selectedWeightContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  kgText: {
    fontSize: 24,
    fontWeight: "normal",
  },
  selectedWeightDisplay: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#254336",
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 60,
  },
  weightContainer: {
    marginBottom: 20,
  },
  weightList: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: (width - width / 5) / 2,
  },
  weightItem: {
    width: width / 5,
    alignItems: "center",
    justifyContent: "center",
  },
  weightText: {
    fontSize: 32,
    color: "#254336",
    textAlign: "center",
  },
  selectedWeightText: {
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

export default Weight;
