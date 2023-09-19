import {
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { BackBtn } from "../components";
import styles from "./login.style";

const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20, marginTop: 25 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
