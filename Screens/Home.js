import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons  } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

export default function Home() {
  return (
    <View style={{height: "100vh"}}>
    <View style={homeStyles.main}>
      <View style={homeStyles.headerNav}>
        <Ionicons name="menu" style={homeStyles.headerNavIcon} />
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="pedal-bike"
            style={[homeStyles.headerNavIcon, { fontSize: "1.4em" }]}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Feather
            name="search"
            style={[homeStyles.headerNavIcon, { marginRight: "0.5em" }]}
          />
          <Feather name="bell" style={homeStyles.headerNavIcon} />
        </View>
      </View>

      <View style={homeComp.main}>
        <Text style={custText.text1}>
          The World's{" "}
          <Text style={[custText.text2, { color: colOrange }]}>Best Bike</Text>
        </Text>
      </View>

      <View style={homeComp.main}>
        <Text style={custText.text3}>Categories</Text>
      </View>

      {/* Mapping for Category tabs */}
      <View style={catRow.main}>
        {categoryTabs.map((tab) => {
          if (tab.active === "yes") {
            return (
              <TouchableOpacity style={catRow.cattab}>
                <Text style={{ color: colOrange }}>{tab.name}</Text>
              </TouchableOpacity>
            );
          } else if (tab.active === "no") {
            return (
              <TouchableOpacity style={catRow.cattab}>
                <Text style={{ color: colGray }}>{tab.name}</Text>
              </TouchableOpacity>
            );
          } else {
          }
        })}
      </View>

      {/* maping for cat items */}
      <View 
      style={catRow.group}
      >
          {catItems.map((items) => (
            <TouchableOpacity style={catRow.item}>
              <TouchableOpacity style={{display:"flex", flexDirection: "row", justifyContent: "flex-end", width: "100%"}}>
                <MaterialIcons name="favorite-outline"
                  style={[ homeStyles.headerNavIcon, catRow.likeIcon, { fontSize: "1em", color:colOrange},]}
                />
              </TouchableOpacity>
              <View>
                <Image style={catRow.ImageStyle} source={items.image}/>
              </View>
              <Text style={custText.text1}>{items.name}</Text>
              <Text style={[custText.text3, {color: colOrange}]}>{items.currency} <Text style={{color:"black"}}>{items.price}</Text> </Text>
            </TouchableOpacity>
          ))}
        </View>
    </View>
    <View style={{position: "absolute", bottom: 0, display:"flex", flexDirection: "row", justifyContent: "space-around", width:"100vw", paddingVertical: "1em", backgroundColor: "rgb(235, 235, 235)"}}>
            <TouchableOpacity>
              <MaterialIcons
                name="home-filled"
                style={[homeStyles.headerNavIcon, { fontSize: "1.4em", color: colOrange}]}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialCommunityIcons 
                name="shopping-outline"
                style={[homeStyles.headerNavIcon, { fontSize: "1.4em" , color: colGray}]}/>
            </TouchableOpacity>
    </View>

    <View style={{position: "absolute", bottom: "2em", left:"calc(50vw - 1.5em)"}}>
    <TouchableOpacity style={{backgroundColor:"black",padding:" 1em",borderRadius: "50%" }}>
              <MaterialCommunityIcons 
                name="microphone-outline"
                style={[homeStyles.headerNavIcon, { fontSize: "1.4em", color: "white" }]}/>
            </TouchableOpacity>
    </View>
            

    </View>


  );
}

// Page Data
const categoryTabs = [
  { name: "All", active: "yes" },
  { name: "Roadbikes", active: "no" },
  { name: "Mountain", active: "no" },
  { name: "Urban bikes", active: "no" },
];

const catItems = [
  {
    name: "Pinarello Bike",
    image: require("./Images/pinarelloBike.png"),
    currency: "$",
    price: "1,700.00",
    like: "yes",
  },
  {
    name: "Bromton Bike",
    image: require("./Images/bromptonBike.png"),
    currency: "$",
    price: "1,500.00",
    like: "no",
  },
  {
    name: "Schwinn Bike",
    image: require("./Images/schwinaBike.png"),
    currency: "$",
    price: "1,200.00",
    like: "no",
  },
  {
    name: "Norco Bike",
    image: require("./Images/narcoBike.png"),
    currency: "$",
    price: "9,80.00",
    like: "no",
  },
  {
    name: "Bamboo Bike",
    image: require("./Images/bambooBike.png"),
    currency: "$",
    price: "7,200.00",
    like: "yes",
  },
  {
    name: "Santacruz Bike",
    image: require("./Images/santaCruzBike.png"),
    currency: "$",
    price: "19,80.00",
    like: "yes",
  },
  {
    name: "Trax Bike",
    image: require("./Images/traxBike.png"),
    currency: "$",
    price: "9,80.00",
    like: "yes",
  },
  {
    name: "Norco Bike-Used",
    image: require("./Images/narcoBike.png"),
    currency: "$",
    price: "7,80.00",
    like: "no",
  },
];

// Page styles
const homeStyles = StyleSheet.create({
  main: {
    marginTop: "20px",
    flex: 1,
    fontSize: "20px",
    backgroundColor: "rgb(256,256,256)",
    paddingHorizontal: "10px",
    width: "100%",
 
  },
  headerNav: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  headerNavIcon: {
    fontSize: "1em",
    color: "rgb(0,0,0)",
  },
});

const colOrange = "rgb(252, 131, 58)";
const colGray = "rgba(0, 0, 0, 0.4)";

const homeComp = StyleSheet.create({
  main: { margin: "5px" },
});

const custText = StyleSheet.create({
  text1: {
    fontSize: "0.8em",
    color: "rgba(0, 0, 0, 0.4)",
  },

  text2: {
    fontSize: "1.3em",
    fontWeight: "bold",
  },
  text3: {
    fontSize: "0.8em",
    fontWeight: "bold",
  },
});

const catRow = StyleSheet.create({
  cattab: {
    paddingHorizontal: "0.7em",
    paddingVertical: "0.3em",
    backgroundColor: "rgb(240,240,240)",
    marginHorizontal: "0.3em",
    borderRadius: "0.5em",
  },
  main: {
    marginVertical: "0.5em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "scroll",
  },

  group:{
    paddingVertical:"0.3em",
    display: "flex",
    flexDirection: "row",
    gap: "0.5em",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "scroll",
    height: "75%"
  },

  item: {
    paddingHorizontal: "0.7em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: "0.5em",
    backgroundColor: "rgb(240,240,240)",
    marginHorizontal: "0.3em",
    borderRadius: "0.5em",
    width: "7.5em",
    height: "11em"
  },
  ImageStyle:{
    marginVertical: "0.6em",
    width: "5em", 
    height: "5em",
  },
  likeIcon: {
    backgroundColor: "rgb(256,256,256)",
    borderRadius: "50%",
    padding: "0.2em"
  }
});
