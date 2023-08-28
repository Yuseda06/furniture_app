import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import * as Haptics from "expo-haptics";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const randomWords = require("lorem-ipsum-generator");

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>MYR 3,400.00</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => [
                setCount(count + 1),
                Haptics.notificationAsync(
                  Haptics.NotificationFeedbackType.Success
                ),
              ]}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>
              {" "}
              {"  "}
              {count}
              {"  "}{" "}
            </Text>
            <TouchableOpacity
              onPress={() => [
                count > 1 ? setCount(count - 1) : null,
                Haptics.notificationAsync(
                  Haptics.NotificationFeedbackType.Success
                ),
              ]}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}> Description</Text>
          <Text style={styles.descText}>
            {randomWords.getLoremIpsumText(67)}
          </Text>
        </View>

        <View
          style={{
            marginBottom: SIZES.small,
            justifyContent: "center",
          }}
        >
          <View style={styles.location}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-outline" size={20} />

              <Text>{"   "}Dallas</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />

              <Text>{"   "}Free Delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: SIZES.width * 0.7,
              backgroundColor: COLORS.black,
              padding: SIZES.small / 2,
              borderRadius: SIZES.large,
            }}
          >
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 37,
              height: 37,
              backgroundColor: COLORS.black,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
