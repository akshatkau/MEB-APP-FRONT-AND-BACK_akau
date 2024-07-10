import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground, TextInput } from 'react-native';
const logo = require("./assets/logo.jpg");
const notification = require("./assets/notification.png");
const settings = require("./assets/settings.png");
const profilepic = require("./assets/edit.jpg");

const Profile = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [bloodgroup, setBloodGroup] = useState('');

    return(
       <View styles={styles.container}>
        <ImageBackground 
       source={require("./assets/background.jpeg")}
       style={styles.backimg}>
        <ScrollView>
         
         <View style={styles.topline}>
          <Image 
          source={logo}
          style={styles.logotop}/>
          <Text style={styles.titlet}>User Profile</Text>
          <Image 
          source={notification}
          style={styles.noti}/>
          <Image 
          source={settings}
          style={styles.settings}/>
          </View>

          <Image 
          source={profilepic}
          style={styles.profilepic}/>

          <Text style={styles.profilepictext}>Hello, User Name!</Text>

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
        onChangeText={setUsername}/>

        <TouchableOpacity style={styles.buttondesign}/>

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}/>

<Text style={styles.label}>Height:</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        keyboardType='numeric'/>

<Text style={styles.label}>Weight:</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType='numeric'/>

<View style={styles.alignment}>
    <Text style={styles.label}>Phone Number:</Text>

<TouchableOpacity style={[styles.bottombutton, styles.bottommargin]}>
          <Text style={styles.bottomtext}>Send OTP</Text>
         </TouchableOpacity>

</View>

<TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType='numeric'/>

<Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType='numeric'/>

<Text style={styles.label}>Blood Group:</Text>
      <TextInput
        style={styles.input}
        value={bloodgroup}
        onChangeText={setBloodGroup}/>

         </ScrollView>
         </ImageBackground>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topline: {
        flexDirection: 'row',
        marginTop: 55
    },

    logotop: {
        width: 45,
        height: 45, 
        marginLeft: 30
    },
    titlet: {
        fontSize: 20,
        marginLeft: 50,
        fontWeight: 'bold',
        marginTop: 5
    },
    noti: {
        height: 45,
        width: 45,
        marginLeft: 30
    },
    settings: {
        height: 40,
        width: 40,
        marginLeft: 20
    },
    profilepic: {
        alignSelf: 'center',
        marginLeft: -30,
        marginTop: 10,
        height: 100,
        width: 100,
        borderRadius: 100
    },
    profilepictext: {
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: -30
    },
    label: {
        fontSize: 18,
        marginVertical: 8,
        marginLeft: 25
      },
      input: {
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 4,
        marginBottom: 16,
        marginLeft: 20,
        width: 365
      },
      alignment: {
        flexDirection: 'row'
      },
      bottombutton: {
        padding: 5,
        backgroundColor: '#E2E2E2',
        width: 140,
        height: 40,
        alignSelf: 'flex-start',
        borderRadius: 30,
        opacity: 0.8,
     },
     bottomtext: {
         fontSize: 16,
         textAlign: 'center'
     },
     bottommargin: {
         marginLeft: 20,
         marginBottom: 5
     },
    
});

export default Profile;