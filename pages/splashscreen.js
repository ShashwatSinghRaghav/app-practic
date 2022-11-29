import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Sscreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Home");
  }, 3000);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../img/logo.png")} />
      </View>
    </SafeAreaView>
  );
};

export default Sscreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    width: "60%",
    height: "5.9%",
  },
});
