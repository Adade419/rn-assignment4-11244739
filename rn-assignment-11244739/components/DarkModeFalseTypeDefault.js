import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import DarkModeFalseTypeDefault1 from "./DarkModeFalseTypeDefault1";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeFalseTypeDefault = ({
  notch,
  battery,
  wifi,
  mobileSignal,
  darkModeFalseTypeDefaultPosition,
  darkModeFalseTypeDefaultTop,
  darkModeFalseTypeDefaultLeft,
  notchIconRight,
  notchIconBottom,
  notchIconOverflow,
  notchIconMaxHeight,
  notchIconWidth,
  notchIconHeight,
  textColor,
}) => {
  const darkModeFalseTypeDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeFalseTypeDefaultPosition),
      ...getStyleValue("top", darkModeFalseTypeDefaultTop),
      ...getStyleValue("left", darkModeFalseTypeDefaultLeft),
    };
  }, [
    darkModeFalseTypeDefaultPosition,
    darkModeFalseTypeDefaultTop,
    darkModeFalseTypeDefaultLeft,
  ]);

  const notchIconStyle = useMemo(() => {
    return {
      ...getStyleValue("right", notchIconRight),
      ...getStyleValue("bottom", notchIconBottom),
      ...getStyleValue("overflow", notchIconOverflow),
      ...getStyleValue("maxHeight", notchIconMaxHeight),
      ...getStyleValue("width", notchIconWidth),
      ...getStyleValue("height", notchIconHeight),
    };
  }, [
    notchIconRight,
    notchIconBottom,
    notchIconOverflow,
    notchIconMaxHeight,
    notchIconWidth,
    notchIconHeight,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View
      style={[styles.darkModefalseTypedefault, darkModeFalseTypeDefaultStyle]}
    >
      <Image
        style={[styles.notchIcon, notchIconStyle]}
        contentFit="cover"
        source={notch}
      />
      <View style={styles.rightSide}>
        <Image
          style={[styles.batteryIcon, styles.iconPosition]}
          contentFit="cover"
          source={battery}
        />
        <Image
          style={[styles.wifiIcon, styles.iconPosition]}
          contentFit="cover"
          source={wifi}
        />
        <Image
          style={[styles.mobileSignalIcon, styles.iconPosition]}
          contentFit="cover"
          source={mobileSignal}
        />
      </View>
      <View style={styles.leftSide}>
        <DarkModeFalseTypeDefault1
          darkModeFalseTypeDefaultPosition="absolute"
          darkModeFalseTypeDefaultTop={0}
          darkModeFalseTypeDefaultLeft={0}
          darkModeFalseTypeDefaultWidth={54}
          darkModeFalseTypeDefaultHeight={21}
          textColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    height: 11,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
  },
  wifiIcon: {
    right: 29,
    width: 15,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSide: {
    top: 12,
    left: 24,
    width: 54,
    height: 21,
    position: "absolute",
  },
  darkModefalseTypedefault: {
    width: 375,
    height: 44,
    overflow: "hidden",
  },
});

export default DarkModeFalseTypeDefault;
