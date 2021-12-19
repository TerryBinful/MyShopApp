import React from "react";
import { catItems, categoryTabs } from "./allData.js";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Footer from "./footer.js";


export default function Home({ navigation }) {
  var pageData = 'HomePage'
  return (
    <View style={{ height: "100vh" }}>
      <View style={homeStyles.main}>
        <View style={homeStyles.headerNav}>
          <Ionicons name="menu" style={homeStyles.headerNavIcon} />
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              name="pedal-bike"
              style={[homeStyles.headerNavIcon, { fontSize: 28 }]}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Feather
              name="search"
              style={[homeStyles.headerNavIcon, { marginRight: 10 }]}
            />
            <Feather name="bell" style={homeStyles.headerNavIcon} />
          </View>
        </View>

        <View style={homeComp.main}>
          <Text style={custText.text1}>
            The World's{" "}
            <Text style={[custText.text2, { color: colOrange }]}>
              Best Bike
            </Text>
          </Text>
        </View>

        <View style={homeComp.main}>
          <Text style={custText.text3}>Categories</Text>
        </View>

        {/* Mapping for Category tabs */}
        <View>
          <ScrollView horizontal={true}>
            <View style={catRow.main}>
              {categoryTabs.map((tab) => (
                    <TouchableOpacity style={catRow.cattab}>
                      {tab.active
                      ?<Text style={{ color: colOrange }}>{tab.name}</Text>
                      :<Text style={{ color: colGray }}>{tab.name}</Text>
                      }
                    </TouchableOpacity>
                  ))
                }
            </View>
          </ScrollView>
        </View>

        {/* maping for cat items */}
        <ScrollView>
          <View style={catRow.group}>
            {catItems.map((items) => (
              <TouchableOpacity style={catRow.item}>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: 130,
                  }}
                >
                  {items.like ? (
                    <MaterialIcons
                      name="favorite-outline"
                      style={[
                        homeStyles.headerNavIcon,
                        catRow.likeIcon,
                        { fontSize: 20, color: colOrange },
                      ]}
                    />
                  ) : (
                    <MaterialIcons
                      name="favorite-outline"
                      style={[
                        homeStyles.headerNavIcon,
                        catRow.likeIcon,
                        { fontSize: 20, color: "black" },
                      ]}
                    />
                  )}
                </TouchableOpacity>
                <View>
                  <Image style={catRow.ImageStyle} source={items.image} />
                </View>
                <Text style={custText.text1}>{items.name}</Text>
                <Text style={[custText.text3, { color: colOrange }]}>
                  {items.currency}{" "}
                  <Text style={{ color: "black" }}>{items.price}</Text>{" "}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View>
       
      </View>
      < Footer pageName={'HomePage'} style={{ position:"absolute", bottom: 0}}/>
    </View>
  );
}

// Page styles
const colOrange = "rgb(252, 131, 58)";
const colGray = "rgba(0, 0, 0, 0.4)";

const homeComp = StyleSheet.create({
  main: { margin: 5 },
});

const homeStyles = StyleSheet.create({
  main: {
    marginTop: 20,
    flex: 1,
    fontSize: 20,
    backgroundColor: "rgb(256,256,256)",
    paddingHorizontal: 10,
  },
  headerNav: {
    // flex:1,
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

const custText = StyleSheet.create({
  text1: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: '500',
  },
  text2: {
    fontSize: 26,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 16,
    fontWeight: "bold",
  },
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 90,
  },

  item: {
    paddingHorizontal: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "rgb(240,240,240)",
    marginHorizontal: 6,
    borderRadius: 10,
    width: 148,
    height: 220,
    margin: 10,
  },
  ImageStyle: {
    marginVertical: 12,
    width: 100,
    height: 100,
  },
  likeIcon: {
    backgroundColor: "rgb(256,256,256)",
    borderRadius: 100,
    padding: 4,
  },
});
