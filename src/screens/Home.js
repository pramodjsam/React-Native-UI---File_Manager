import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
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

const Home = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    Animated.timing(pan, {
      toValue: { x: 800, y: 0 },
      delay: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground
        source={require("../images/bitmap.png")}
        style={styles.bi}
        resizeMode="cover"
      >
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }}>
            <Fontisto name="minus-a" color={Colors.colors.light} size={25} />
            <Ionicons
              name="ios-remove"
              color={Colors.colors.light}
              style={styles.ico}
              size={32}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.av} source={require("../images/2.jpg")} />
            <View style={styles.dot} />
          </View>
        </View>
        <View style={styles.topText}>
          <Text style={styles.textFile}>File</Text>
          <Entypo name="dots-three-horizontal" size={24} color="#FFF" />
        </View>
        <Text style={styles.textManager}>Manager</Text>
        <View style={styles.topText}>
          <Text style={styles.le}>Let's clean and </Text>
          <Text style={styles.ri}>manager your files</Text>
        </View>
        <View style={styles.sideTab}>
          <View style={{ marginLeft: -20 }}>
            <Text style={styles.tab1}>External Storage</Text>
            <Text style={styles.tab2}>Internal Storage</Text>
          </View>
          <Animated.View style={[pan.getLayout()]}>
            <View style={styles.card}>
              <View style={styles.top}>
                <Text style={styles.textTop}>Your Storage</Text>
                <Entypo
                  name="sound-mix"
                  color="#fff"
                  style={{ marginLeft: 50 }}
                  size={16}
                />
              </View>
              <View>
                <View style={styles.center}>
                  <View style={styles.col}>
                    <Text style={styles.space}>128</Text>
                    <Text style={styles.gb}>GB</Text>
                  </View>
                  <Text style={styles.per}>70% USED</Text>
                </View>
                <PieChart
                  style={styles.pie}
                  valueAccessor={({ item }) => item.amount}
                  spacing={0}
                  data={data}
                  innerRadius="60%"
                  outerRadius="90%"
                />
                <View style={styles.labelContainer}>
                  <View
                    style={{
                      ...styles.circle,
                      backgroundColor: Colors.colors.light,
                    }}
                  />
                  <Text style={styles.textUsed}>Used</Text>
                  <View
                    style={{
                      ...styles.circle,
                      backgroundColor: Colors.colors.yellow,
                    }}
                  />
                  <Text style={styles.textFree}>Free</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Detail")}
              >
                <Text style={styles.textStorage}>Storage</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.colors.light,
    flex: 1,
  },
  bi: {
    height: 640,
    width: Dimensions.get("window").width + 4,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 20,
  },
  av: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.colors.yellow,
    marginLeft: -4,
  },
  topText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 20,
  },
  textFile: {
    fontSize: 34,
    color: Colors.colors.light,
    flex: 1,
    fontFamily: "Montserrat_700Bold",
  },
  textManager: {
    fontSize: 28,
    color: Colors.colors.light,
    fontWeight: "400",
    marginHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
  },
  le: {
    color: Colors.colors.light,
    fontFamily: "Montserrat_600SemiBold",
  },
  ri: {
    color: Colors.colors.yellow,
    fontFamily: "Montserrat_600SemiBold",
  },
  sideTab: {
    flexDirection: "row",
    marginHorizontal: -15,
  },
  tab1: {
    color: Colors.colors.yellow,
    transform: [{ rotate: "-90deg" }],
    marginTop: 60,
    fontFamily: "Montserrat_600SemiBold",
  },
  tab2: {
    color: Colors.colors.light,
    transform: [{ rotate: "-90deg" }],
    marginTop: 120,
    fontFamily: "Montserrat_600SemiBold",
  },
  card: {
    backgroundColor: Colors.colors.red,
    height: 370,
    width: 210,
    borderRadius: 20,
    marginLeft: -800,
  },
  top: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textTop: {
    color: "#fff",
    fontSize: 16,
    opacity: 1,
    fontFamily: "Montserrat_600SemiBold",
  },
  center: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 60,
    alignItems: "center",
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
  },
  space: {
    color: "#FFF",
    fontSize: 24,
    fontFamily: "Montserrat_600SemiBold",
  },
  gb: {
    marginTop: 5,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
  pie: {
    height: 150,
    marginTop: 15,
  },
  per: {
    color: "#FFF",
    fontFamily: "Montserrat_600SemiBold",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  textUsed: {
    color: Colors.colors.light,
    fontFamily: "Montserrat_600SemiBold",
  },
  textFree: {
    color: Colors.colors.yellow,
    fontFamily: "Montserrat_600SemiBold",
  },
  textStorage: {
    color: Colors.colors.light,
    fontSize: 18,
    fontFamily: "Montserrat_600SemiBold",
  },
  btn: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: Colors.colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#f04946",
  },
});

export default Home;
