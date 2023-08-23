import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import styles from "./carousel.style";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
    "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",
    "https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        autoplay
        circleLoop
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
          height: 500,
        }}
      />
    </View>
  );
};

export default Carousel;
