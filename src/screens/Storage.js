import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Storage = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={{ paddingLeft: 20 }}>
        <Text style={{ fontFamily: "Montserrat_600SemiBold" }}>{title}</Text>
        <Text style={styles.day}>03 December 2021</Text>
        <Text style={styles.desc}>Files: 75 items</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 80,
    flex: 1,
    backgroundColor: "#f4f5f3",
    // backgroundColor: "yellow",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 30,
    resizeMode: "center",
  },
  day: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 12,
    color: "gray",
  },
  desc: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 11,
  },
});

export default Storage;
