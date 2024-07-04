import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
const logo = require("./assets/logo.jpg");
const notification = require("./assets/notification.png");
const settings = require("./assets/settings.png");
const homepage = require("./assets/homepage.png");
const graph = require("./assets/graph.jpg");
const steps = require("./assets/steps.jpg");
const calories = require("./assets/calories.jpg");
const water = require("./assets/water.jpg");
const reminders = require("./assets/reminders.jpg");
const reports = require("./assets/reports.jpg");
const name = require("./assets/name.jpg");


const Dashboard = () => {

    return(
        <View style={styles.container}>
          
          <ImageBackground 
       source={require("./assets/background.jpeg")}
       style={styles.backimg}>

       
          <View>
          <Image 
          source={logo}
          style={styles.logotop}/>
          <Text style={styles.titlet}>Dashboard</Text>
          <Image 
          source={notification}
          style={styles.noti}/>
          <Image 
          source={settings}
          style={styles.settings}/>

          </View>

          <Image 
          source={name}
          style={styles.name}/>

          <Image 
          source={graph}
          style={styles.graph}/>

        <View style={styles.parameters}>
          <Image 
          source={steps}
          style={styles.steps}/>

          <Image 
          source={calories}
          style={styles.calories}/>

          <Image 
          source={water}
          style={styles.water}/>

         </View>

          <View style={styles.alignboxes}>
          <Image 
          source={reminders}
          style={styles.reminders}/>

         <Image 
          source={reports}
          style={styles.reports}/>
          </View>

<TouchableOpacity style={styles.bottombutton}>
          <Text style={styles.bottomtext}>Add New Data</Text>
         </TouchableOpacity>

         </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    logotop: {
        marginLeft: 0,
        marginTop: 40,
        width: 45,
        height: 45
    },
    titlet: {
        marginLeft: 100,
        marginTop: -45,
        fontSize: 19,
        color: '#254336',
        fontWeight: 'bold'
    },
    noti: {
        marginLeft: 240,
        width: 50,
        height: 50,
        marginTop: -35
    },
    settings: {
        width: 35,
        height: 35,
        marginLeft: 320,
        marginTop: -45
    },
    graph: {
        marginTop: 180,
        alignSelf: 'center'
    },
    reminders:{
        marginTop: 25,
        marginLeft: -10,
        height: 150,
        width: 180
    },
    alignboxes: {
        flexDirection: 'row'
    },
    reports:{
        marginLeft: 20,
        marginTop: 30,
        height: 150,
        width: 160,
        
    },
    buttondata:{
        marginTop: 40,
        alignSelf: 'center'
    },
    name:{
        width: 380,
        height: 100,
        marginTop: 30,
        marginBottom: -100,
        alignSelf: 'center'
    },
    graph: {
        width: 360,
        height: 200,
        marginTop: 140,
        alignSelf: 'center'
    },
    parameters:{
        flexDirection: 'row'
    },

    steps: {
        height: 62,
        width: 115,
        marginTop: 30,
        marginLeft: -20
    },
    calories:{
        height: 62,
        width: 115,
        marginLeft: 15,
        marginTop: 30
    },
    water: {
         height: 60,
         width: 110,
         marginTop: 30,
         marginLeft: 18
    },
    bottombutton: {
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 2,
        width: 200,
        height: 50,
        alignSelf: 'center',
        borderRadius: 30
     },
     bottomtext: {
         fontSize: 16,
         textAlign: 'center',
         marginTop: 8
     },
     backimg: {
            resizeMode: 'contain',
            padding: 40
        },
    
})

export default Dashboard;
