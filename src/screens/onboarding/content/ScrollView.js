// [+] Import React
import React from "react";
import { Text, View, Pressable, Image, Animated } from "react-native";

// [+] Import Component
import core from "../../../components/function/App.core";

// [+] Import Constants
import { style, theme } from "../../../constants";

// T[+] heme
const { COLORS, SIZES } = theme;
// [+] Style
const { onBoardStyle } = style;

export const ScrollView = (props) => {
  // Props
  const { scrollX, scroll, board, navigation } = props;

  return (
    <Animated.ScrollView
      ref={scroll}
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="center"
      decelerationRate={0}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {board.map((item, index) => (
        <View key={index} style={{ width: SIZES.width }}>
          {/* Image */}
          <View
            style={{
              height: SIZES.height > 700 ? 470 : 290,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={item.image} style={onBoardStyle.image} />
          </View>
          {/* End Image */}
          {/* Text */}
          <View
            style={{
              flex: 1,
              padding: 60,
            }}
          >
            <Text style={[onBoardStyle.title, { textAlign: "center" }]}>
              {item.title}
            </Text>
            <Text
              style={[
                onBoardStyle.textStyle,
                { textAlign: "center", marginTop: 10 },
              ]}
            >
              {item.description}
            </Text>
          </View>
          {/* End Text */}

          {/* Button */}
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            <Pressable
              style={[
                onBoardStyle.btn,
                {
                  backgroundColor: core.last(board, index)
                    ? COLORS.primary
                    : COLORS.secondary,
                },
              ]}
              onPress={() => {
                core.last(board, index)
                  ? navigation.navigate("LandingScreen")
                  : core.scrollNext(scroll, index);
              }}
            >
              <Text
                style={{
                  color: core.last(board, index) ? COLORS.white : COLORS.dark,
                  fontSize: 20,
                }}
              >
                {core.last(board, index) ? "Get Started" : "Next"}
              </Text>
            </Pressable>
          </View>
          {/* End Button */}
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default ScrollView;
