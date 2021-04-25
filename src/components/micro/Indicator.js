import React from "react";
import { View, Animated } from "react-native";

import { style, theme } from "../../constants";

// Theme
const { COLORS, FONTS, SIZES } = theme;
// Style
const { onBoardStyle } = style;

export const Indicator = (props) => {
  // Props
  const { board, scrollX } = props;

  return (
    <View style={onBoardStyle.indicatorContainer}>
      {board.map((item, index) => {
        // Input Range
        const inputRange = [
          (index - 1) * SIZES.width,
          index * SIZES.width,
          (index + 1) * SIZES.width,
        ];

        // Chnage indicator width per scroll
        const indicatorWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        // Chnage indicator width per scroll
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index.toString()}
            opacity={opacity}
            style={[onBoardStyle.indicator, { width: indicatorWidth }]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Indicator;
