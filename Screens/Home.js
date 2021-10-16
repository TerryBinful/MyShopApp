import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Home(){
    return (
    <View style= {homeStyles.main}>
        <View style={homeStyles.headerNav}>
            <Ionicons name="menu" style={homeStyles.headerNavIcon}/>
            <View style={{flexDirection:'row', }}>
                <MaterialIcons name="pedal-bike" style={ homeStyles.headerNavIcon}/>
            </View>
            <Feather name="search" style={homeStyles.headerNavIcon} />
            
            
            <Feather name="bell" style={homeStyles.headerNavIcon} />
        </View>
        
        


    </View>
    );
}

const homeStyles = StyleSheet.create({
   main:{
        flex:1,
        backgroundColor:'rgb(256,256,256)'

    },
    headerNav:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        margin:5,
    },
    headerNavIcon:{
        fontSize: 20,
        color: 'rgb(0,0,0)'
    }
});