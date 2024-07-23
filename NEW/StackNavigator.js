import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Dashboard from "./screens/Dashboard";
import SignupScreen from "./screens/SignupScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import FaqScreen from "./screens/FaqScreen";
import HomePage from "./screens/HomePage";
import BlogScreen from "./screens/BlogScreen";
import LogIn from "./screens/LogIn";
import ContactUs from "./screens/ContactUs";
import Profile from "./screens/Profile";
import GenderScreen from "./screens/GenderScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ForgotPasswordScreen from "./screens/ForgotPassword";
import Age from "./screens/Age";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import Weight from "./screens/Weight";
import BloodType from "./screens/BloodType";
import SleepLevel from "./screens/SleepLevel";
import DailyStepsScreen from "./screens/DailyStepsScreen";
import WaterIntake from "./screens/WaterIntake";
import Height from "./screens/Height";
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#254336",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          shadowOpacity: 4,
          shadowRadius: 4,
          elevation: 4,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="white" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="white" />
            ) : (
              <Ionicons name="person-outline" size={24} color="white" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gender"
          component={GenderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BloodType"
          component={BloodType}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Age"
          component={Age}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Height"
          component={Height}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Weight"
          component={Weight}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SleepLevel"
          component={SleepLevel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DailySteps"
          component={DailyStepsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WaterIntake"
          component={WaterIntake}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Log"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQ"
          component={FaqScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Blog"
          component={BlogScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
