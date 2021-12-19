import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login.js";
import Home from "./Screens/Home.js";
import Cart from "./Screens/Cart.js";
import Footer from "./Screens/footer.js";


const Stack = createStackNavigator();
var pageData = 'HomePage'
 function App() {



  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
      
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;