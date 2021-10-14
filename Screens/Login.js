import React from 'react';
import splash from '../assets/icon.png'
import { StyleSheet, Text, View, Image } from 'react-native';


export default function Login(){
    return (
    <View style={{flex:1,justifyContent:'flex-start',alignContent: 'center' }}>

    <Image source={require(splash)} style={{width: 200, height: 300}}/>
    <Text>Try</Text>

        


    </View>
    );
}