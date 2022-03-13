import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Storage from "./Storage";
import MaterialIconCommunity from "@expo/vector-icons/MaterialCommunityIcons";
import Material from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "../constants/Colors";
import { PieChart } from "react-native-svg-charts";

const data = [
  {
    key: 1,
    amount: 80,
    svg: { fill: Colors.colors.light },
  },
  {
    key: 2,
    amount: 20,
    svg: { fill: Colors.colors.yellow },
  },
];

const Detail = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const list = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    Animated.timing(pan, {
      toValue: { x: -400, y: 0 },
      delay: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(list, {
      toValue: { x: 0, y: -300 },
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.colors.light,
      }}
    >
      <ImageBackground
        source={require("../images/bitmap1.png")}
        style={styles.back}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flex: 1 }}
          >
            <Entypo
              name="chevron-thin-left"
              size={25}
              color={Colors.colors.light}
            />
          </TouchableOpacity>
          <View style={styles.top}>
            <Image source={require("../images/1.jpeg")} style={styles.av} />
            <View style={styles.ci}></View>
          </View>
        </View>
        <View style={styles.col}>
          <Text style={styles.textStorage}>My Storage</Text>
          <Entypo name="sound-mix" color="#FFF" size={16} />
        </View>
        <View style={styles.desc}>
          <PieChart
            style={styles.pie}
            data={data}
            valueAccessor={({ item }) => item.amount}
            innerRadius="80%"
            outerRadius="90%"
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.textTotal}>Total Used</Text>
            <View style={styles.col1}>
              <Text style={styles.spc}>89.09</Text>
              <Text style={styles.gb}>GB</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.spc}> / 128</Text>
                <Text style={styles.gb}>GB</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 25 }}>
            <Text style={styles.items}>689</Text>
            <Text style={styles.label}>Items</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={{ marginTop: -60 }}>
        <View style={styles.card}>
          <View style={styles.col2}>
            <MaterialIconCommunity
              name="folder"
              size={60}
              color={Colors.colors.yellow}
              style={{ flex: 1 }}
            />
            <View style={styles.col2}>
              <Image
                style={styles.friends}
                source={require("../images/1.jpeg")}
              />
              <Image
                style={styles.friends}
                source={require("../images/3.jpg")}
              />
              <Image
                style={styles.friends}
                source={require("../images/4.jpg")}
              />
            </View>
          </View>
        </View>
        <Animated.View style={[list.getLayout(), styles.list]}>
          <Storage image={require("../images/on.png")} title="One Drive" />
          <Storage image={require("../images/go.png")} title="Google Drive" />
          <Storage image={require("../images/dr.png")} title="Dropbox" />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: Dimensions.get("window").width + 4,
    height: 380,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
  },
  av: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  top: {
    alignItems: "flex-end",
    position: "relative",
  },
  ci: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.colors.yellow,
    position: "absolute",
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  textStorage: {
    fontSize: 24,
    color: Colors.colors.light,
    fontFamily: "Montserrat_800ExtraBold",
    flex: 1,
  },
  desc: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
  pie: {
    height: 100,
    flex: 1,
    marginLeft: 20,
    marginTop: 15,
  },
  textTotal: {
    color: Colors.colors.light,
    fontSize: 18,
    marginLeft: 10,
    width: 100,
    marginTop: 8,
    fontFamily: "Montserrat_600SemiBold",
  },
  col1: {
    flexDirection: "row",
    marginLeft: 10,
  },
  spc: {
    color: Colors.colors.light,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 18,
  },
  gb: {
    color: Colors.colors.light,
    fontSize: 12,
    marginTop: 6,
    fontFamily: "Montserrat_600SemiBold",
  },
  items: {
    color: Colors.colors.yellow,
    fontSize: 28,
    fontFamily: "Montserrat_600SemiBold",
  },
  label: {
    color: Colors.colors.light,
    fontSize: 12,
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: 15,
  },
  card: {
    backgroundColor: "#FFF",
    elevation: 4,
    // height: 100,
    width: 320,
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  col2: {
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "yellow",
  },
  friends: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFF",
    marginLeft: -10,
  },
  list: {
    marginTop: 300,
  },
});

export default Detail;
