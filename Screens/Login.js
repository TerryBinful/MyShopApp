import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign  } from '@expo/vector-icons';


export default function Login({navigation}){
    return (
    <View style={Loginstyles.main}>

    {/* //Login image */}
    <Image 
        style={Loginstyles.ImageStyle}
        source={require("./Images/LoginPic.png")} 
    />
    
    {/* //Welcome texts */}
    <Text style={Loginstyles.welText}>Welcome to</Text>
    <Text style={Loginstyles.shopName}>Power Bikes Shop </Text>

    {/* //SignIn methods */}
    {/* //Google third-party signIn */}
    <TouchableOpacity onPress={() => { alert("All Done")}} >
        <Text style={[Loginstyles.tab1,Loginstyles.tab]} >
            {/* //third-party signin icon */}
            <AntDesign name="google" style={Loginstyles.tabIcon}/>  
            Login with Gmail
        </Text>
    </TouchableOpacity>

    {/* Apple third-party signIn */}
    <TouchableOpacity onPress={() => { navigation.navigate ('Home')}} >
        <Text style={[Loginstyles.tab,Loginstyles.tab2]}>
            {/*//third-party signin icon */}
            <AntDesign name="apple1" style={Loginstyles.tabIcon}/>  
            Login with Apple
        </Text>
    </TouchableOpacity>
    
    {/* SignUp */}
    <Text style={Loginstyles.signUpText}>
        Not a member? {" "}
        <TouchableOpacity onPress={() => { navigation.navigate ('Home')}} >
            <Text style={[Loginstyles.signUpText, {color:'rgb(253,99,1)'}]}>
                Sign up
            </Text>
        </TouchableOpacity>
    </Text>

    </View>
    );

}

//Styles
const Loginstyles = StyleSheet.create({
    main :{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
    },    
    ImageStyle: {   
        width: 150, 
        height: 150,
        borderRadius: 10,
        transform: [{rotate:'315deg'}],
        margin: 50,
    },    
    welText: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 30
    },
    shopName: {
        color: 'rgb(0,0,0)',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10,
    },
    tab:{
        marginBottom:5,
        marginTop:5,
        padding:10,
        paddingHorizontal: 60,
        borderRadius:10,
        fontSize:15
    },
    tab1:{
        color: 'rgb(0,0,0)',
        backgroundColor: 'rgb(230,230,230)',
    },
    tab2:{
        color: 'rgb(256,256,256)',
        backgroundColor: 'rgb(0,0,0)',
    },
    tabIcon:{
        fontSize: 20,
        marginRight:15
    },
    signUpText:{
        fontSize: 14,
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 10
    }
  })