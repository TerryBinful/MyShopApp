import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { cartItems, currency } from "./allData.js";
import Footer from "./footer.js";

export default function Cart({ navigation }) {
   let subTotal = cartItems.reduce(
      (totalVar, allTotal) => totalVar + allTotal.price,
      0
   );
   let shippingFee = 1000;
   const nf = new Intl.NumberFormat();
   let pop = (pop) => {
      return nf.format(pop) + ".00";
   };
   return (
      <View style={{ height: "calc(100vh )", width: "100vw" }}>
         <View style={cartStyles.main}>
            <View style={cartStyles.headerNav}>
               <Ionicons name="arrow-back" style={cartStyles.headerNavIcon} />
               <View
                  style={{
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}>
                  <Text style={custText.text3}>Cart list</Text>
                  <Text style={custText.text1}>
                     {cartItems.length + " items"}
                  </Text>
               </View>
               <View></View>
            </View>

            <ScrollView>
               <View style={catRow.group}>
                  {cartItems.map((items) => (
                     <View style={catRow.item}>
                        <View style={{ flexDirection: "row" }}>
                           <View style={catRow.ImageStyle}>
                              <Image
                                 style={{ height: 60, width: 60 }}
                                 source={items.image}
                              />
                           </View>
                           <View style={catRow.itemDet}>
                              <Text style={custText.text2}>{items.name}</Text>
                              <Text style={[custText.text1, { fontSize: 12 }]}>
                                 {" "}
                                 {items.category}{" "}
                              </Text>
                              <Text
                                 style={[custText.text3, { color: colOrange }]}>
                                 {items.currency}
                                 <Text style={{ color: "black" }}>
                                    {pop(items.price)}
                                 </Text>
                              </Text>
                           </View>
                        </View>
                        <View
                           style={{
                              flexDirection: "column",
                              alignItems: "flex-end",
                              justifyContent: "space-between",
                           }}>
                           <TouchableOpacity>
                              <Ionicons
                                 name="trash-outline"
                                 style={[
                                    catRow.deleteIcon,
                                    { color: colOrange },
                                 ]}
                              />
                           </TouchableOpacity>
                           <View
                              style={{
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                              }}>
                              <TouchableOpacity>
                                 <MaterialCommunityIcons
                                    name="minus-circle"
                                    style={catRow.cartIcon}
                                 />
                              </TouchableOpacity>

                              <Text
                                 style={[
                                    custText.text3,
                                    { marginHorizontal: 5 },
                                 ]}>
                                 1
                              </Text>

                              <TouchableOpacity>
                                 <Ionicons
                                    name="add-circle"
                                    style={[
                                       catRow.cartIcon,
                                       { color: colOrange },
                                    ]}
                                 />
                              </TouchableOpacity>
                           </View>
                        </View>
                     </View>
                  ))}
               </View>
               <View style={totalSec.group}>
                  <View style={totalSec.item}>
                     <Text style={custText.text1}>Subtotal </Text>
                     <Text
                        style={[
                           custText.text3,
                           { fontSize: 13, color: colOrange },
                        ]}>
                        {currency.at(0)}
                        <Text style={{ color: "black", fontSize: 16 }}>
                           {pop(subTotal)}
                        </Text>
                     </Text>
                  </View>
                  <View style={totalSec.item}>
                     <Text style={custText.text1}>Shipping fee </Text>
                     <Text
                        style={[
                           custText.text3,
                           { fontSize: 13, color: colOrange },
                        ]}>
                        {currency.at(0)}
                        <Text style={{ color: "black", fontSize: 16 }}>
                           {pop(shippingFee)}
                        </Text>
                     </Text>
                  </View>
                  <View
                     style={[
                        totalSec.item,
                        {
                           borderStyle: "dashed",
                           borderTopWidth: 1,
                           borderColor: colGray,
                        },
                     ]}>
                     <Text style={custText.text3}>Total </Text>
                     <Text
                        style={[
                           custText.text3,
                           { fontSize: 13, color: colOrange },
                        ]}>
                        {currency.at(0)}
                        <Text style={{ color: "black", fontSize: 16 }}>
                           {pop(subTotal + shippingFee)}
                        </Text>
                     </Text>
                  </View>
               </View>
            </ScrollView>

            <View
               style={{
                  alignItems: "center",
                  justifyContent: "flex-end",
                  bottom: 120,
               }}>
               <Pressable
                  style={({ pressed }) => [
                     pressed ? proceed.pressed : proceed.normal,
                  ]}>
                  <Text style={proceed.text}>Proceed to Checkout</Text>
               </Pressable>
            </View>
         </View>
         <Footer
            pageName={"pageData"}
            style={{ position: "absolute", bottom: 0 }}
         />
      </View>
   );
}

// Page styles
const colOrange = "rgb(252, 131, 58)";
const colGray = "rgb(150,150,150)";

const cartStyles = StyleSheet.create({
   main: {
      display: "flex",
      marginTop: 20,
      flex: 1,
      fontSize: 20,
      backgroundColor: "rgb(256,256,256)",
      paddingHorizontal: 10,
      alignItems: "stretch",
   },
   headerNav: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 5,
   },
   headerNavIcon: 
    { 
        fontSize: 23, 
        color: "rgb(0,0,0)" 
    },
});

const custText = StyleSheet.create({
   text1: { fontSize: 16, color: "rgba(0, 0, 0, 0.4)", fontWeight: "500" },
   text2: { fontSize: 16, fontWeight: "400" },
   text3: { fontSize: 18, fontWeight: "bold", textAlignVertical: "bottom" },
});

const catRow = StyleSheet.create({
   cattab: {
      height: 33,
      paddingHorizontal: 14,
      paddingVertical: 6,
      backgroundColor: "rgb(240,240,240)",
      marginHorizontal: 6,
      borderRadius: 10,
   },
   main: {
      marginVertical: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
   },
   group: {
      paddingVertical: 6,
      justifyContent: "space-around",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 70,
   },
   item: {
      alignSelf: "center",
      paddingHorizontal: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: 80,
      minWidth: 350,
      maxWidth: 600,
      margin: 10,
   },
   ImageStyle: {
      backgroundColor: "rgb(240,240,240)",
      padding: 10,
      borderRadius: 10,
      justifyContent: "center",
   },
   itemDet: {
      marginHorizontal: 20,
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      justifyContent: "space-between",
   },
   deleteIcon: {
      fontSize: 18,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "rgb(240,240,240)",
      borderRadius: 100,
      padding: 2,
      color: colOrange,
      marginHorizontal: 6,
   },
   cartIcon: {
      fontSize: 30,
      borderStyle: "solid",
      borderColor: "rgb(240,240,240)",
      borderRadius: 100,
      padding: 4,
   },
});

const totalSec = StyleSheet.create({
   group: {
      alignSelf: "center",
      bottom: 20,
      flexDirection: "column",
      flexWrap: "nowrap",
      backgroundColor: "rgb(240,240,240)",
      padding: 5,
      borderRadius: 20,
      justifyContent: "space-between",
      width: 350,
      marginBottom: 120,
   },
   item: {
      flexDirection: "row",
      padding: 15,
      justifyContent: "space-between",
      alignItems: "center",
   },
});

const proceed = StyleSheet.create({
   normal: {
      padding: 20,
      backgroundColor: colOrange,
      width: 300,
      borderRadius: 13,
   },
   pressed: {
      padding: 20,
      backgroundColor: "rgb(20, 20, 20)",
      width: 300,
      borderRadius: 13,
   },
   text: {
      color: "rgb(256, 256, 256)",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
   },
});
