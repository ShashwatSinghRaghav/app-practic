import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../img/logo.png")} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "52%",
    height: undefined,
    aspectRatio: 135 / 26,
    paddingTop: 20,
  },
});
