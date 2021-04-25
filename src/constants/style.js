import { StyleSheet } from "react-native";

// Import constants
import theme from "./theme";

// Theme
const { SIZES, COLORS, FONTS } = theme;

// onBoarding Style
export const onBoardStyle = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: COLORS.white,
    height: SIZES.height,
  },
  header: {
    height: SIZES.height > 700 ? 470 : 290,
    width: "100%",
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.height > 700 ? 100 : 50,
    position: "absolute",
    left: 0,
    right: 0,
  },
  image: {
    width: 270,
    height: 270,
    marginLeft: 10,
  },
  indicatorRootContainer: {
    position: "absolute",
    bottom: SIZES.height > 700 ? "33%" : "48%",
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorContainer: {
    height: SIZES.padding,
    flexDirection: "row",
  },
  indicator: {
    height: 10,
    backgroundColor: "#FF9F00",
    marginHorizontal: 10 / 2,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 16,
    color: COLORS.grey,
  },
  btn: {
    height: 50,
    backgroundColor: "rgba(12,13,52,0.05)",
    borderRadius: 50,
    width: 220,
    justifyContent: "center",
    alignItems: "center",
  },
});
// End onBoarind Style

// Landing Style
export const landingStyle = StyleSheet.create({
  header: {
    height: SIZES.height,
    backgroundColor: COLORS.primary,
  },
  container: {
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: COLORS.white,
    marginTop: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
  },
});
// End Landing Style

const stylesApp = {
  onBoardStyle,
  landingStyle,
};

export default stylesApp;
