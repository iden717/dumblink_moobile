import { StatusBar } from "expo-status-bar";
// [+] Import React
import React from "react";
import { SafeAreaView, View, Animated } from "react-native";
import { useRef } from "react";

// [+] Import Dummy Data
import { BOARDS } from "../../data/Data";

// [+] Import constants
import { style, theme } from "../../constants";

// [+] Import Component
import ContentView from "./content/ScrollView";
import Indicator from "../../components/micro/Indicator";

// [+] Theme
const { COLORS, FONTS, SIZES } = theme;

// [+] Style
const { onBoardStyle } = style;

export default function OnBorading({ navigation }) {
  // useRef animate value
  const scrollX = useRef(new Animated.Value(0)).current;
  const scroll = useRef(null);

  // Render Content
  return (
    <SafeAreaView style={onBoardStyle.app}>
      {/* Status Bar */}
      <StatusBar translucent backgroundColor={COLORS.tranparent} />
      {/* End Status Bar */}
      {/* Header */}
      <View style={onBoardStyle.header}></View>
      {/* End Header */}
      {/* Content */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* Container / Content */}
        <View style={{ height: SIZES.height }}>
          <ContentView
            scrollX={scrollX}
            scroll={scroll}
            board={BOARDS}
            navigation={navigation}
          />
        </View>
        {/* End Container / Content */}
        {/* Indicator */}
        <View style={onBoardStyle.indicatorRootContainer}>
          <Indicator board={BOARDS} scrollX={scrollX} />
        </View>
        {/* End Indicator */}
      </View>
      {/* End Content */}
    </SafeAreaView>
  );
}
