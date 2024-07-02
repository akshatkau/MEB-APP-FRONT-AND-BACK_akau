import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageBackground, TextInput } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
const logo = require("./assets/logo.jpg");
const facebooklogo = require("./assets/facebook.png");
const googlelogo = require("./assets/google.png");
const hidepassword = require("./assets/hidepassword.png");

const LogIn = () =>{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <ImageBackground 
       source={require("./assets/background.jpeg")}
       style={styles.backgimg}>
         <View style={styles.align}>
            <Image 
          source={logo}
          style={styles.logotop}/>
          <Text style={styles.titlet}>MyEasyPharma</Text>
          </View>
          <Text style={styles.logintext}>Log In</Text>
          <View style={styles.textlogin}>
          <Text style={styles.litext}>Don't have an account?</Text>
          <Text style={styles.underline}>Sign Up</Text>
          </View>
          <TouchableOpacity style={styles.buttononetwo}>
          <Image
           source={facebooklogo}
           style={styles.fglogo}
          />
          <Text style={styles.fgtext}>Log in with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttononetwo}>
          <Image
           source={googlelogo}
           style={styles.fglogo}
          />
          <Text style={styles.fgtext}>Log in with Google</Text>
          </TouchableOpacity>
          <View style={styles.arrange}>
           <View style={styles.dashedline} />
           <Text style={styles.dashedlinetext}>OR</Text>
           <View style={styles.dashedline} />
          </View>
          <View>
          <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}/>

        <TouchableOpacity style={styles.buttonbelow}/>


      <View style={styles.passwordandicon}>

      <Text style={styles.label}>Password</Text>

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}/>

        <View style={styles.hidethepassword}>

            <Image source={hidepassword}
                style={styles.hpimage} />
            
        <Text style={styles.fptext}>Hide</Text>

       </View>

       </View> 

      <TouchableOpacity style={styles.buttonbelow}/>
      </View>
      <Text style={styles.underlinetext}>Forgot your password</Text>
      <TouchableOpacity style={[styles.button, styles.margin]}>
      <Text style = {styles.buttontext}>Log In</Text>
      </TouchableOpacity>
      </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    logotop: {
        padding: 10,
        width: 50,
        height: 50,
        marginLeft:-20,
        marginTop: 0
    },
    align:{
        flexDirection: 'row'
    },
    titlet: {
        marginTop: 5,
        marginLeft: 30,
        fontSize: 20,
        color: '#254336'
    },
    logintext: {
        marginTop: 40,
        marginLeft: 0,
        fontSize: 20,
        color:'#254336'
    },
    litext: {
        marginLeft: 0,
        marginTop: 10,
        fontSize:16,
        color: '#254336'
    },
    underline: {
        textDecorationLine: 'underline',
        color: '#254336',
        fontSize: 16,
        marginLeft: 5,
        marginTop: 9
    },
    textlogin: {
        flexDirection: 'row',
        marginBottom: 30
    },
    buttononetwo: {
        alignSelf: 'center',
        marginTop: 20,
        height: 45,
        width: 270,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor:'black',
        borderWidth: 2,
        flexDirection: 'row',
        marginBottom: 16
    },
    fglogo: {
        width:30,
        height:30,
        marginLeft:18,
        marginRight: 20,
        marginTop: 5
    },
    fgtext: {
        fontSize: 16,
        marginTop: 8
    },
    dashedline:{
        width: 110,
        height: 2,
        backgroundColor: 'black',
        marginTop: 30,
        marginLeft: -5
    },
    dashedlinetext: {
        marginTop: 16,
        marginLeft: 5,
        fontSize: 16,
        marginRight: 10,
        alignSelf: 'center'
    },
    arrange: {
        flexDirection: 'row'
    },
    label: {
        marginTop: 20,
        fontSize: 18,
        paddingLeft:5,
        marginLeft: 0,
        marginBottom: -20
      },
      buttonbelow: {
        alignSelf: 'center',
        marginTop:0,
        height: 45,
        width: 270,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor:'black',
        borderWidth: 2,
        flexDirection: 'row',
        marginBottom: 1
      },
      underlinetext: {
        textDecorationLine: 'underline',
        color: '#254336',
        fontSize: 15,
        marginLeft: 85,
        marginTop: 9,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#6B8A7A',
        padding: 5,
        borderRadius: 25,
        width: 150,
        height: 40,
        alignSelf: 'center',
    },
    buttontext: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 2
    },
    margin: {
        marginBottom: 30,
        marginTop: 50
    },
    passwordandicon: {
        flexDirection: 'row'
    },
    hpimage:{
        width:20,
        height: 20,
        marginTop: 25,
        marginLeft: 85,
        marginBottom: 8
    },
    fptext: {
        marginTop: 24
    },
    hidethepassword: {
        flexDirection: 'row'
    },
    backgimg: {
        padding: 80,
        resizeMode: 'cover'
      }
})

export default LogIn;