import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Animated,
} from "react-native";

import core from "../components/function/App.core";

import { COLORS, SIZES, style } from "../constants/";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
      <Animated.ScrollView style={{ marginTop: 40 }}>
        <View style={[styles.container, { height: SIZES.height }]}>
          <View style={styles.formContainer}>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={[styles.card, { width: "100%", marginBottom: 20 }]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      marginLeft: 10,
                      height: 70,
                      width: 70,
                      borderRadius: 50,
                    }}
                    source={require("../assets/images/bg.png")}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.titleName]}>My Name,</Text>
                    <Text style={[styles.titleName]}>Denny Dharmawan</Text>
                    <Text style={[styles.label, { fontSize: 14 }]}>
                      denny@gmail.com
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.cardLink, { width: "100%", marginBottom: 20 }]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      marginLeft: 10,
                      height: 70,
                      width: 70,
                      borderRadius: 50,
                    }}
                    source={require("../assets/images/jco.png")}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.titleName]}>FoodWays</Text>
                    <Text style={[styles.label, { fontSize: 14 }]}>
                      denny@gmail.com
                    </Text>
                  </View>
                  <View style={{ marginLeft: 50 }}>
                    <Text style={{ color: "blue" }}>Edit</Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.cardLink, { width: "100%", marginBottom: 20 }]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      marginLeft: 10,
                      height: 70,
                      width: 70,
                      borderRadius: 50,
                    }}
                    source={require("../assets/images/star.png")}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.titleName]}>Starbucks</Text>
                    <Text style={[styles.label, { fontSize: 14 }]}>
                      denny@gmail.com
                    </Text>
                  </View>
                  <View style={{ marginLeft: 50 }}>
                    <Text style={{ color: "blue" }}>Edit</Text>
                  </View>
                </View>
              </View>
              <View
                style={[styles.cardLink, { width: "100%", marginBottom: 20 }]}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{
                      marginLeft: 10,
                      height: 70,
                      width: 70,
                      borderRadius: 50,
                    }}
                    source={require("../assets/images/kfc.png")}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.titleName]}>KFC</Text>
                    <Text style={[styles.label, { fontSize: 14 }]}>
                      denny@gmail.com
                    </Text>
                  </View>
                  <View style={{ marginLeft: 50 }}>
                    <Text style={{ color: "blue" }}>Edit</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
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
    height: "20%",
  },
  container: {
    backgroundColor: COLORS.white,
  },
  formContainer: {
    justifyContent: "center",
    margin: 30,
  },
  formInput: {
    marginTop: 20,
    flexDirection: "column",
  },
  label: {
    fontSize: 12,
    color: "#9893AA",
  },
  card: {
    justifyContent: "center",
    height: 150,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardLink: {
    justifyContent: "center",
    height: 100,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.white,
  },
  titleName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
  },
});
