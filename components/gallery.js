import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";

const Gallery = ({ data }) => {
  const { width } = useWindowDimensions();
  const SIZE = width * 0.7;
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate="fast"
    >
      {data.map((item, index) => {
        return (
          <View style={{ width: SIZE }}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
});
