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

const { width } = Dimensions.get("window");

const Weight = () => {
  const navigation = useNavigation();
  const [selectedWeight, setSelectedWeight] = useState(60);
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

  const handleContinue = () => {
    Alert.alert("Selected Weight", `You selected: ${selectedWeight} kg`);
    navigation.navigate("BloodType");
  };

  const renderWeightItem = ({ item }) => {
    return (
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
  };

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
            onPress={() => navigation.navigate("Age")}
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
    top: -310,
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
    marginTop: -180,
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
    marginBottom: 60,
  },
  weightContainer: {
    marginBottom: 20,
  },
  weightList: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: (width - width / 5) / 2, // Center the items in the middle of the screen
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
    fontSize: 49,
    color: "#254336",
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#254336",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: "70%",
    alignItems: "center",
    alignSelf: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Weight;
