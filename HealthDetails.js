import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
const logo = require("./assets/logo.jpg");
const notification = require("./assets/notification.png");
const settings = require("./assets/settings.png");
const profilePic = require("./assets/edit.jpg");

const HealthDetails = () => {

    return(
        <View style={styles.container}>
          <ImageBackground 
       source={require("./assets/background.jpeg")}
       style={styles.backimg}>
          <View>
          <Image 
          source={logo}
          style={styles.logotop}/>
          <Text style={styles.titlet}>Health Details</Text>
          <Image 
          source={notification}
          style={styles.noti}/>
          <Image 
          source={settings}
          style={styles.settings}/>
          </View>

          <Image 
      source={profilePic}
      style={styles.image}/>
           <Text style={styles.profiletext}>Arnav Shah</Text>
           <Text style={styles.text}>Details</Text>

           <View style = {styles.box}>
            <Text style={styles.weight}>Weight(in kg)</Text>
           <TouchableOpacity style={styles.buttonbelow}/>
           <Text style={styles.weight}>Height(in cm)</Text>
           <TouchableOpacity style={styles.buttonbelow}/>
           <Text style={styles.weight}>Age</Text>
           <TouchableOpacity style={styles.buttonbelow}/>
           <Text style={styles.weight}>Other Details</Text>
           <TouchableOpacity style={styles.odbutton}/>
           </View>
           <TouchableOpacity style={[styles.button, styles.margin]}>
          <Text style = {styles.buttontext}>Log Details</Text>
         </TouchableOpacity>
         </ImageBackground>
        </View>
    )
  
}

const styles = StyleSheet.create({
    logotop: {
        marginLeft: 30,
        marginTop: 50,
        width: 45,
        height: 45
    },
    titlet: {
        marginLeft: 130,
        marginTop: -45,
        fontSize: 18,
        color: '#254336',
        fontWeight: 'bold'
    },
    noti: {
        marginLeft: 280,
        width: 50,
        height: 50,
        marginTop: -35
    },
    settings: {
        width: 35,
        height: 35,
        marginLeft: 350,
        marginTop: -45
    },
    image: {
        width: 10,
        height: 10,
        alignSelf: 'center',
        borderWidth: 35,
        marginTop: 30
      },
      profiletext: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#254336',
        fontWeight: 'bold',
        marginTop: 5
      },
      text: {
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 20,
        color: '#254336',
        fontWeight: 'bold',
        
      },
      box: {
        width: "75%",
        height: "55%",
        backgroundColor: '#6B8A7A',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 25,
        opacity: 0.5
      },
      buttonbelow: {
        alignSelf: 'center',
        marginTop:8,
        height: 45,
        width: 270,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor:'black',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 1,
        
      },
      weight: {
        alignSelf: 'center',
        marginRight: 15,
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold',
        
      },
      odbutton: {
        alignSelf: 'center',
        marginTop:8,
        height: 125,
        width: 270,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor:'black',
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: 1
      },
      button: {
        backgroundColor: '#E2E2E2',
        padding: 5,
        borderRadius: 20,
        width: 150,
        height: 40,
        alignSelf: 'center',
    },
    margin: {
        marginBottom: -35,
        marginTop: 25
    },
    buttontext: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    backimg: {
        padding: 10,
        marginBottom: -380,
        resizeMode: 'cover'
    }, 
})


export default HealthDetails;