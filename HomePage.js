import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
const homepage = require("./assets/homepage.png");


const HomePage = () => {

    return(

        <View style={styles.container}>
            <ImageBackground 
       source={require("./assets/background.jpeg")}
       style={styles.backimg}>

       
       
        <Text style = {styles.title}>Welcome to MyEasyPharma</Text>   
        <Text style={styles.titletext}>AI Curated Corporate Wellness Program</Text>
        <Image 
         source={homepage}
         style={styles.image} />
         <TouchableOpacity style={[styles.button, styles.margin]}>
          <Text style = {styles.buttontext}>Get started for free</Text>
         </TouchableOpacity>
         <TouchableOpacity style={[styles.bottombutton, styles.bottommargin]}>
          <Text style={styles.bottomtext}>Our Services</Text>
         </TouchableOpacity>

         </ImageBackground>
        </View>
    )

}
    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            color: '#254336',
            paddingTop: 10,
            paddingLeft: 30,
            paddingBottom: 20
        },
        titletext: {
            fontSize: 20,
            color: '#254336',
            paddingLeft: 30,
            paddingBottom: 40
        },
        image: {
            height: 310,
            width: 372,
            alignSelf: 'center',
            
        },
        button: {
            backgroundColor: '#6B8A7A',
            padding: 5,
            borderRadius: 15,
            width: 180,
            height: 40,
            alignSelf: 'center',
        },
        buttontext: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center'
        },
        margin: {
            marginBottom: 70,
            marginTop: 25
        },
        bottombutton: {
           padding: 5,
           backgroundColor: '#E2E2E2',
           width: 160,
           height: 40,
           alignSelf: 'flex-start',
           borderRadius: 30
        },
        bottomtext: {
            fontSize: 16,
            textAlign: 'center'
        },
        bottommargin: {
            marginLeft: 40
        },
        backimg: {
            padding: 90,
            resizeMode: 'cover'
        },
        
        
    });
    
export default HomePage;




       