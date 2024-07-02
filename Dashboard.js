import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
const logo = require("./assets/logo.jpg");
const notification = require("./assets/notification.png");
const settings = require("./assets/settings.png");
const homepage = require("./assets/homepage.png");
const fourdots = require("./assets/fourdots.png");
const footprint = require("./assets/footprint.jpg");
const calories = require("./assets/calories.jpg");
const water = require("./assets/water.jpg");
const dumbbell = require("./assets/dumbbell.png");

const Dashboard = () => {

    return(
        <View style={styles.container}>
          
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

          <View style={styles.boxone}>
           <View> 
          <Text style={styles.textone}>Hello Arnav Shah,</Text>
           <Text style={styles.textoneone}>Have a nice day and remember to</Text>
           <Text style={styles.textoneone}>take care of your health!</Text>
           <Image 
          source={fourdots}
          style={styles.fourdots}/>
           </View>
           <Image 
         source={homepage}
         style={styles.image} />

          </View>     
          
          <View style={styles.boxtwo}>
          
          </View>
          <View style={styles.horiboxone}>
          
          <View style={styles.boxthree}>
            <View style={styles.steps}>
          <Image 
          source={footprint}
          style={styles.footprint}/>

          <Text style={styles.stepstext}>2000</Text>
          </View>
          <Text style={styles.stepst}>Steps</Text>
          </View> 
          
          <View style={styles.boxfour}>
            <View style={styles.caloriebox}>
          <Image 
          source={calories}
          style={styles.calories}/>
          <Text style={styles.caloriestext}>400 kcal</Text>
          </View>
          <Text style={styles.caloriest}>Burnt</Text>
          </View> 

          <View style={styles.boxfive}>

          <View style={styles.waterbox}>
          <Image 
          source={water}
          style={styles.water}/>
          <Text style={styles.watertext}>3 litres</Text>
          </View>
           <Text style={styles.watert}>Consumed</Text>
          </View> 
           </View>        

           <View style={styles.horiboxtwo}>
            
           <View style={styles.boxsix}>
            
            <View>
            <Image 
          source={dumbbell}
          style={styles.dumbbell}/>
            </View>

            </View>

           <View style={styles.boxseven}> 

           </View>
            
           </View>    

           <TouchableOpacity style={[styles.button, styles.margin]}>
          <Text style = {styles.buttontext}>Add New Data</Text>
         </TouchableOpacity>

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
        marginLeft: 135,
        marginTop: -45,
        fontSize: 19,
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
    boxone: {
        width: 375,
        height: 130,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 20,
        opacity: 0.8,
        flexDirection: 'row'
    },
    textone: {
        fontSize: 16,
        marginLeft: 15,
        marginTop: 8,
        fontWeight: 'bold',
        color: ''
    },
    textoneone: {
        marginTop: 10,
        marginLeft: 15
    },
    fourdots:{
        color: 'black',
        width: 40,
        height: 20,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 110,
        backgroundColor: '#EFFFD6',
        opacity: 0.20
    },
    image: {
        height: 150,
        width: 120,
        alignSelf: 'center',
        marginTop: 10
    },
    boxtwo: {
        width: 375,
        height: 181,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 20,
        opacity: 1,
        flexDirection: 'row'
    },
    boxthree: {
        width: 115,
        height: 80,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'flex-start',
        borderRadius: 20,
        opacity: 0.8,
        flexDirection: 'row',
        marginLeft: 20
    },
    boxfour:{
        width: 115,
        height: 80,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'flex-start',
        borderRadius: 20,
        opacity: 0.8,
        flexDirection: 'row',
        marginLeft: 3
    },
    boxfive:{
        width: 115,
        height: 80,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'flex-start',
        borderRadius: 20,
        opacity: 0.8,
        flexDirection: 'row',
        marginRight: 20
    },

    horiboxone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -5
    },
    boxsix: {
        width: 220,
        height: 150,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'flex-start',
        borderRadius: 20,
        opacity: 0.8,
        flexDirection: 'row',
        marginLeft: 10
    },
    boxseven:{
        width: 140,
        height: 150,
        backgroundColor: '#EFFFD6',
        marginTop: 30,
        alignSelf: 'flex-start',
        borderRadius: 20,
        opacity: 0.8,
        flexDirection: 'row',
        marginRight: 10
    },
    horiboxtwo:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        width: 150,
        height: 40,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black'
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
    footprint: {
        width: 40,
        height: 40,
        margin: 8
    },
    steps: {
        flexDirection: 'row'
    },
    stepstext: {
        fontSize: 14,
        marginTop: 10,
        fontWeight: 'bold'
    },
    stepst: {
        fontSize: 14,
        color: 'black',
        marginTop: 30,
        marginLeft: -38
    },
    calories: {
        width: 40,
        height: 40,
        margin: 8
    },
    caloriebox:{
        flexDirection: 'row'
    },

    caloriestext: {
        fontSize: 13,
        marginTop: 10,
        fontWeight: 'bold',
        marginLeft: -2
    },
    caloriest:{
        fontSize: 14,
        color: 'black',
        marginTop: 30,
        marginLeft: -50
    },
    water:{
        width: 40,
        height: 40,
        margin: 8
    },
    waterbox:{
        flexDirection: 'row'
    },
    watertext:{
        fontSize: 14,
        color: 'black',
        marginTop: 10,
        marginLeft: -8,
        marginLeft: 2,
        fontWeight: 'bold'
    },
    watert:{
        marginTop: 30,
        marginLeft: -58,
        fontSize: 12
    },
    dumbbell: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginLeft: 20
    }
    
})

export default Dashboard;
