import React from "react";
import { StyleSheet, View, Pressable, } from "react-native-web";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

export default function Footer({ pageName, navigation }) {
    return (
        <View>
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    paddingVertical: 20,
                    backgroundColor: "rgb(235, 235, 235)",
                }}
            >
                <TouchableOpacity onPress={() => { navigation.navigate ('Home')}} >
                    {pageName === 'HomePage'
                    ?  <MaterialIcons  name="home-filled"style={[ homeStyles.headerNavIcon, { fontSize: 28, color: colOrange },]}/>
                    : <MaterialCommunityIcons  name="home-outline"style={[ homeStyles.headerNavIcon, { fontSize: 30, color: 'black' },]}/>
                    // pageName==='CartPage' 
                    // ?  <MaterialIcons  name="home-outlined"style={[ homeStyles.headerNavIcon, { fontSize: 28, color: 'black' },]}/>
                    // : {}
                    }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate ('Cart')}} >
                    {pageName === 'HomePage'
                    ? <MaterialCommunityIcons name="shopping-outline" style={[homeStyles.headerNavIcon, { fontSize: 28, color: colGray }]}  />
                    : <MaterialCommunityIcons name="shopping" style={[homeStyles.headerNavIcon, { fontSize: 28, color: colOrange }]}  />
                    // pageName === 'CartPage'
                    // ? <MaterialCommunityIcons name="shopping-filled" style={[homeStyles.headerNavIcon, { fontSize: 28, color: colOrange }]}  />
                    // : {}
                    }
                </TouchableOpacity>
            </View>

            <View style={{ position: "absolute", bottom: 40, left: "43%" }}>
                <Pressable
                    style={({ pressed }) => [
                        pressed ? recordIcon.pressed : recordIcon.normal,
                    ]}
                >
                    <MaterialCommunityIcons
                        name="microphone-outline"
                        style={[homeStyles.headerNavIcon, { fontSize: 28, color: "white" }]}
                    />
                </Pressable>
            </View>
        </View>
    )
}

// Page styles
const homeStyles = StyleSheet.create({
    main: {
        marginTop: 20,
        flex: 1,
        fontSize: 20,
        backgroundColor: "rgb(256,256,256)",
        paddingHorizontal: 10,
    },
    headerNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
    },
    headerNavIcon: {
        fontSize: 20,
        color: "rgb(0,0,0)",
    },
});

const recordIcon = StyleSheet.create({
    pressed: {
      backgroundColor: colOrange,
      padding: 20,
      borderRadius: 100,
    },
    normal: {
      backgroundColor: "black",
      padding: 20,
      borderRadius: 100,
    },
});

const colOrange = "rgb(252, 131, 58)";
const colGray = "rgba(0, 0, 0, 0.4)";
