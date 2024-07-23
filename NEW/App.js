import { StyleSheet, Text, View } from "react-native";
import Navigation from "./StackNavigator";
import { AppRegistry } from "react-native";

import Axios from "axios";
//import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
