import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
const profilePic = require("./assets/edit.jpg");
import { useSelector, useDispatch } from "react-redux";
import { setUserProfile } from "./redux/actions.js";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [text, setText] = useState("");
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [height, setHeight] = useState(user.height);
  const [weight, setWeight] = useState(user.weight);
  const [phone, setPhone] = useState(user.phone);
  const [age, setAge] = useState(user.age);

  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);
    setHeight(user.height);
    setWeight(user.weight);
    setPhone(user.phone);
    setAge(user.age);
  }, [user]);

  const handleSave = () => {
    dispatch(
      setUserProfile(username, email, password, height, weight, phone, age)
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("./assets/backgroundimg.png")}
          style={styles.backgimg}
        >
          <Text style={styles.title}>MyEasyPharma</Text>

          <Image source={profilePic} style={styles.image} />

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

          <TouchableOpacity style={styles.buttondesign} />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <Text style={styles.label}>Height:</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={setHeight}
          />

          <Text style={styles.label}>Weight:</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
          />

          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.label}>Age:</Text>
          <TextInput style={styles.input} value={age} onChangeText={setAge} />
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    paddingLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    paddingLeft: 10,
  },

  title: {
    fontSize: 20,
    paddingLeft: 110,
    paddingTop: 40,
    paddingBottom: 20,
  },

  image: {
    width: 20,
    height: 20,
    alignSelf: "center",
    borderWidth: 50,
  },
  backgimg: {
    padding: 15,
  },
});

export default UserProfile;
