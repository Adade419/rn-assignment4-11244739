import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = ({
  productManager,
  beats,
  floridaUS,
  y,
  showBeats,
  showImage8Icon,
  component1Width,
  component1Height,
  component1MarginTop,
  productManagerFontSize,
  productManagerLineHeight,
  productManagerFontWeight,
  productManagerFontFamily,
  floridaUSLeft,
  yLeft,
}) => {
  const component1Style = useMemo(() => {
    return {
      ...getStyleValue("width", component1Width),
      ...getStyleValue("height", component1Height),
      ...getStyleValue("marginTop", component1MarginTop),
    };
  }, [component1Width, component1Height, component1MarginTop]);

  const productManagerStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", productManagerFontSize),
      ...getStyleValue("lineHeight", productManagerLineHeight),
      ...getStyleValue("fontWeight", productManagerFontWeight),
      ...getStyleValue("fontFamily", productManagerFontFamily),
    };
  }, [
    productManagerFontSize,
    productManagerLineHeight,
    productManagerFontWeight,
    productManagerFontFamily,
  ]);

  const floridaUSStyle = useMemo(() => {
    return {
      ...getStyleValue("left", floridaUSLeft),
    };
  }, [floridaUSLeft]);

  const yStyle = useMemo(() => {
    return {
      ...getStyleValue("left", yLeft),
    };
  }, [yLeft]);

  return (
    <View style={[styles.component1, component1Style]}>
      <View style={styles.component1Child} />
      <Text
        style={[
          styles.productManager,
          styles.beatsPosition,
          productManagerStyle,
        ]}
      >
        {productManager}
      </Text>
      {showBeats && (
        <Text style={[styles.beats, styles.beatsTypo]}>{beats}</Text>
      )}
      <Text style={[styles.floridaUs, styles.yFlexBox, floridaUSStyle]}>
        {floridaUS}
      </Text>
      <Text style={[styles.y, styles.yFlexBox, yStyle]}>{y}</Text>
      {showImage8Icon && (
        <Image
          style={styles.image8Icon}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  beatsPosition: {
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.1,
    left: "25.38%",
    position: "absolute",
  },
  beatsTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.regular14,
    lineHeight: 21,
    fontSize: FontSize.regular13_size,
    top: "51.35%",
  },
  yFlexBox: {
    textAlign: "right",
    color: Color.black,
    letterSpacing: -0.1,
    position: "absolute",
  },
  component1Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.pureWhite,
    position: "absolute",
  },
  productManager: {
    fontSize: FontSize.regular14_size,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.semibold24,
    top: "21.62%",
  },
  beats: {
    textAlign: "left",
    color: Color.black,
    letterSpacing: -0.1,
    left: "25.38%",
    position: "absolute",
  },
  floridaUs: {
    left: "72.78%",
    opacity: 0.5,
    fontFamily: FontFamily.regular14,
    lineHeight: 21,
    fontSize: FontSize.regular13_size,
    top: "51.35%",
  },
  y: {
    left: "73.7%",
    fontSize: FontSize.medium12_size,
    lineHeight: 19,
    fontWeight: "500",
    fontFamily: FontFamily.medium16,
    top: "21.62%",
  },
  image8Icon: {
    height: "58.11%",
    width: "13.15%",
    right: "79.51%",
    bottom: "20.27%",
    left: "7.34%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    top: "21.62%",
    position: "absolute",
  },
  component1: {
    width: 327,
    height: 74,
  },
});

export default Component;
