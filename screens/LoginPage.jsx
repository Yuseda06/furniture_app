import {
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";
import { BackBtn, Button } from "../components";
import styles from "./login.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});

const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  const inValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
      { defaultIndex: 1 },
    ]);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior as needed
      >
        <SafeAreaView style={{ marginHorizontal: 20, marginTop: 25 }}>
          <View>
            <BackBtn onPress={() => navigation.goBack()} />
            <Image
              source={require("../assets/images/bk.png")}
              style={styles.cover}
            />
            <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                setFieldTouched,
              }) => (
                <View>
                  <View>
                    <View style={styles.wrapper}>
                      <Text style={styles.label}>Email</Text>
                      <View
                        style={styles.inputWrapper(
                          touched.email ? COLORS.primary : COLORS.offwhite
                        )}
                      >
                        <MaterialCommunityIcons
                          name="email-outline"
                          size={20}
                          color={COLORS.gray}
                          style={styles.iconStyle}
                        />

                        <TextInput
                          placeholder="Enter email"
                          onFocus={() => {
                            setFieldTouched("email");
                          }}
                          onBlur={() => {
                            setFieldTouched("email", "");
                          }}
                          autoCapitalize="none"
                          onChangeText={handleChange("email")}
                          autoCorrect={false}
                          style={{ flex: 1 }}
                        />
                      </View>

                      {touched.email && errors.email && (
                        <Text style={styles.errorMessage}>{errors.email}</Text>
                      )}
                    </View>

                    <View style={styles.wrapper}>
                      <Text style={styles.label}>Password</Text>
                      <View
                        style={styles.inputWrapper(
                          touched.password ? COLORS.primary : COLORS.offwhite
                        )}
                      >
                        <MaterialCommunityIcons
                          name="lock-outline"
                          size={20}
                          color={COLORS.gray}
                          style={styles.iconStyle}
                        />

                        <TextInput
                          secureTextEntry={obsecureText}
                          placeholder="Password"
                          onFocus={() => {
                            setFieldTouched("password");
                          }}
                          onBlur={() => {
                            setFieldTouched("password", "");
                          }}
                          autoCapitalize="none"
                          value={values.password}
                          onChangeText={handleChange("password")}
                          autoCorrect={false}
                          style={{ flex: 1 }}
                        />

                        <TouchableOpacity
                          onPress={() => {
                            setObsecureText(!obsecureText);
                          }}
                        >
                          <MaterialCommunityIcons
                            name={
                              obsecureText ? "eye-off-outline" : "eye-outline"
                            }
                            size={18}
                          />
                        </TouchableOpacity>
                      </View>

                      {touched.password && errors.password && (
                        <Text style={styles.errorMessage}>
                          {errors.password}
                        </Text>
                      )}
                    </View>

                    <Button
                      title={"L O G I N"}
                      onPress={isValid ? handleSubmit : inValidForm}
                      isValid={isValid}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginPage;
