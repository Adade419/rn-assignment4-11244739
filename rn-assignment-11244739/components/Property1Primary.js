import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Primary = ({
  buttonText,
  property1PrimaryPosition,
  property1PrimaryBorderRadius,
  property1PrimaryBackgroundColor,
  property1PrimaryTop,
  property1PrimaryLeft,
  property1PrimaryWidth,
  onButtonPress,
}) => {
  const property1PrimaryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1PrimaryPosition),
      ...getStyleValue("borderRadius", property1PrimaryBorderRadius),
      ...getStyleValue("backgroundColor", property1PrimaryBackgroundColor),
      ...getStyleValue("top", property1PrimaryTop),
      ...getStyleValue("left", property1PrimaryLeft),
      ...getStyleValue("width", property1PrimaryWidth),
    };
  }, [
    property1PrimaryPosition,
    property1PrimaryBorderRadius,
    property1PrimaryBackgroundColor,
    property1PrimaryTop,
    property1PrimaryLeft,
    property1PrimaryWidth,
  ]);

  return (
    <View
      style={[styles.property1primary, property1PrimaryStyle]}
      onPress={onButtonPress}
    >
      <Text style={styles.next}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  next: {
    fontSize: FontSize.medium16_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.medium16,
    color: Color.pureWhite,
    textAlign: "center",
  },
  property1primary: {
    borderRadius: 16,
    backgroundColor: Color.greenPure,
    width: 156,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: Padding.p_base,
  },
});

export default Property1Primary;
