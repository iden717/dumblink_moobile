import { StatusBar } from "expo-status-bar";
// [+] Import React
import React from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";

// [+] Import constants
import { style, theme } from "../../constants";

// [+] Theme
const { COLORS, FONTS, SIZES } = theme;

// [+] Style
const { landingStyle, onBoardStyle } = style;

export default function OnBorading({ navigation }) {
  // useRef animate value

  // Render Content
  return (
    <SafeAreaView style={onBoardStyle.app}>
      {/* Status Bar */}
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
      {/* End Status Bar */}
      {/* Header */}
      <View style={landingStyle.header}>
        <Image source={require("../../assets/images/bg.png")} />
      </View>
      {/* End Header */}
      {/* Content */}
      <View style={landingStyle.container}>
        {/* Container / Content */}
        <View style={[{ height: SIZES.height }]}>
          <Text></Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <View style={{ width: (SIZES.width / 5) * 3 }}>
              <View>
                <Text
                  style={[style.onBoardStyle.title, { textAlign: "center" }]}
                >
                  The Only Link You’ll Ever Need
                </Text>
                <Text
                  style={[
                    style.onBoardStyle.textStyle,
                    { textAlign: "center", marginTop: 10 },
                  ]}
                >
                  Add a link for your Social Bio and optimize your social media
                  traffic.
                </Text>
              </View>
            </View>
            {/* End Text */}
            <View style={{ paddingTop: SIZES.padding }}>
              <Pressable
                onPress={() => navigation.navigate("LoginScreen")}
                style={[
                  onBoardStyle.btn,
                  {
                    backgroundColor: "#f47645",
                    width: (SIZES.width / 4) * 3,
                  },
                ]}
              >
                <Text style={{ fontSize: 16, color: COLORS.white }}>Login</Text>
              </Pressable>
            </View>
            <View style={{ paddingTop: SIZES.padding }}></View>
            <Pressable
              onPress={() => navigation.navigate("RegisterScreen")}
              style={[
                onBoardStyle.btn,
                {
                  backgroundColor: "#7acfdf",
                  width: (SIZES.width / 4) * 3,
                },
              ]}
            >
              <Text style={{ fontSize: 16, color: COLORS.white }}>
                Register
              </Text>
            </Pressable>
          </View>
        </View>
        {/* End Container / Content */}
        {/* Button */}
        {/* End Button */}
      </View>
      {/* End Content */}
    </SafeAreaView>
  );
}
