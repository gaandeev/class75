import React,{Component} from "react";
import {View,
    StyleSheet,
    ImageBackground,
    Image,
    Textinput,
TouchableOpacity,
Alert,
KeyboardAvoidingView} from "react-native";
import firebase from "firebase";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component{
constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
    };
}
handleLogin = (email,password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundcolor:"#ffffff",
        bgImage:{
            flex:1,
            resizemode:'cover',
            justifyContent:"Center"

        }
    },
    
})