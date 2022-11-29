import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Gallery from "../components/gallery";
import Logo from "../components/logo";
const Home = () => {
  const data = [
    {
      image: require("../img/gallery/1.jpg"),
    },
    {
      image: require("../img/gallery/2.jpg"),
    },
    {
      image: require("../img/gallery/3.jpg"),
    },
    {
      image: require("../img/gallery/4.jpg"),
    },
    {
      image: require("../img/gallery/5.jpg"),
    },
  ];
  return (
    <SafeAreaView>
      <Logo />
      <Gallery style={styles.gallery} data={data} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  gallery: {
    paddingTop: 10,
  },
});
