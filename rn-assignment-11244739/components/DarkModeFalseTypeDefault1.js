import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalseTypeDefault1 = ({
  darkModeFalseTypeDefaultPosition,
  darkModeFalseTypeDefaultTop,
  darkModeFalseTypeDefaultLeft,
  darkModeFalseTypeDefaultWidth,
  darkModeFalseTypeDefaultHeight,
  textColor,
}) => {
  const darkModeFalseTypeDefault1Style = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalseTypeDefaultPosition),
      ...getStyleValue("top", darkModeFalseTypeDefaultTop),
      ...getStyleValue("left", darkModeFalseTypeDefaultLeft),
      ...getStyleValue("width", darkModeFalseTypeDefaultWidth),
      ...getStyleValue("height", darkModeFalseTypeDefaultHeight),
    };
  }, [
    darkModeFalseTypeDefaultPosition,
    darkModeFalseTypeDefaultTop,
    darkModeFalseTypeDefaultLeft,
    darkModeFalseTypeDefaultWidth,
    darkModeFalseTypeDefaultHeight,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View
      style={[styles.darkModefalseTypedefault, darkModeFalseTypeDefault1Style]}
    >
      <Text style={[styles.text, textStyle]}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 1,
    left: 7,
    fontSize: FontSize.regular15_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBoldSubheadline,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 40,
  },
  darkModefalseTypedefault: {
    borderRadius: Border.br_5xl,
    width: 54,
    height: 21,
  },
});

export default DarkModeFalseTypeDefault1;
