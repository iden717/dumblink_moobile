import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

import axios from "axios";

import core from "../components/function/App.core";
import { COLORS, SIZES, style } from "../constants/";

export default function Register({ navigation }) {
  const [form, setForm] = useState();
  console.log("form", form);

  function register() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return axios
      .post("https://dumblink.herokuapp.com/api/v1/login", form, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
      <View
        style={[
          styles.header,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Image
          style={{ resizeMode: "cover", height: 500 }}
          source={require("../assets/images/bg.png")}
        />
      </View>
      <View style={[styles.container, { height: SIZES.height }]}>
        <View style={styles.formContainer}>
          <View style={styles.formInput}>
            <Text style={styles.label}>FULL NAME</Text>
            <TextInput
              onChangeText={(text) =>
                core.onChangeText("fullname", text, form, setForm)
              }
              value={form?.fullname}
              style={styles.input}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
              onChangeText={(text) =>
                core.onChangeText("email", text, form, setForm)
              }
              value={form?.email}
              style={styles.input}
            />
          </View>
          <View style={styles.formInput}>
            <Text style={styles.label}>PASSWORD</Text>
            <TextInput
              onChangeText={(text) =>
                core.onChangeText("password", text, form, setForm)
              }
              value={form?.password}
              style={styles.input}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <View
              style={[
                style.onBoardStyle.btn,
                { backgroundColor: COLORS.primary, width: "100%" },
              ]}
            >
              <Text style={{ color: COLORS.white }}>Register</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    height: SIZES.height,
  },
  header: {
    backgroundColor: COLORS.primary,
    height: "40%",
  },
  container: {
    borderTopLeftRadius: 100,
    backgroundColor: COLORS.white,
    left: 0,
    right: 0,
  },
  formContainer: {
    justifyContent: "center",
    margin: 50,
  },
  formInput: {
    marginTop: 20,
    flexDirection: "column",
  },
  label: {
    fontSize: 12,
    color: "#9893AA",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#9893AA",
    borderColor: COLORS.dark,
    height: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
