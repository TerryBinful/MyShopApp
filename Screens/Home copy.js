import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";

export default function Home() {
  return (
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
              <View >
                { () => {{
                  if(items.like==="yes") {
                    return(
                      <MaterialIcons name="favorite-outline"
                      style={[ homeStyles.headerNavIcon,{ fontSize: "1.4em", color:colOrange },]}
                    />
                    );
                  }else if (items.like ==="no") {
                    return(
                      <MaterialIcons name="favorite-outline"
                      style={[ homeStyles.headerNavIcon,{ fontSize: "1.4em", right: "100%" },]}
                    />
                    );
                  }else {}
                }}

              </View>
              <View>
                <Image style={catRow.ImageStyle} source={items.image}/>
              </View>
              <Text style={custText.text1}>{items.name}</Text>
              <Text style={[custText.text3, {color: colOrange}]}>{items.currency} <Text style={{color:"black"}}>{items.price}</Text> </Text>
            </TouchableOpacity>
          ))}
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
    height: "100%"
 
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
const colGray = "rgba(0, 0, 0, 0.6)";

const homeComp = StyleSheet.create({
  main: { margin: "5px" },
});

const custText = StyleSheet.create({
  text1: {
    fontSize: "0.8em",
    color: "rgba(0, 0, 0, 0.6)",
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
    backgroundColor: "rgb(230,230,230)",
    marginHorizontal: "0.3em",
    borderRadius: "0.5em",
  },
  main: {
    marginVertical: "0.5em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    overflow: "hidden",
  },

  group:{
    display: "flex",
    flexDirection: "row",
    gap: "0.5em",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "scoll"
  },

  item: {
    paddingHorizontal: "0.7em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: "0.3em",
    backgroundColor: "rgb(230,230,230)",
    marginHorizontal: "0.3em",
    borderRadius: "0.5em",
    width: "7.5em"
  },
  ImageStyle:{
    marginVertical: "0.8em",
    width: "5em", 
    height: "5em",
  }
});
