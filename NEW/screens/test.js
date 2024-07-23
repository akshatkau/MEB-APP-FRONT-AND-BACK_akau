import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const test = () => {
  const [value, setValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const value = await getData("myKey");
      if (value) {
        setStoredValue(value);
      }
    };

    fetchData();
  }, []);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error("Failed to save the data to the storage");
    }
  };

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.error("Failed to fetch the data from storage");
    }
  };

  const handleSave = () => {
    storeData("myKey", value);
    setStoredValue(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter some text"
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <Button title="Save" onPress={handleSave} />
      <Text>Stored Value: {storedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default test;
