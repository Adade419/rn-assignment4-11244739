import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Search = ({ filter5, searchPosition, searchTop, searchLeft }) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("position", searchPosition),
      ...getStyleValue("top", searchTop),
      ...getStyleValue("left", searchLeft),
    };
  }, [searchPosition, searchTop, searchLeft]);

  return (
    <View style={[styles.search, searchStyle]}>
      <View style={[styles.searchChild, styles.searchPosition]} />
      <View style={[styles.searchItem, styles.searchPosition]} />
      <Text style={styles.searchAJob}>Search a job or position</Text>
      <Image
        style={[styles.search11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search1-1.png")}
      />
      <Image
        style={[styles.filter5Icon, styles.iconLayout]}
        contentFit="cover"
        source={filter5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    backgroundColor: Color.grey95,
    borderRadius: Border.br_xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  searchChild: {
    width: "14.68%",
    right: "0%",
    left: "85.32%",
  },
  searchItem: {
    width: "80.43%",
    right: "19.57%",
    left: "0%",
  },
  searchAJob: {
    top: "27.08%",
    left: "16.51%",
    fontSize: FontSize.regular15_size,
    letterSpacing: -0.1,
    lineHeight: 23,
    fontFamily: FontFamily.regular14,
    color: Color.grey60,
    textAlign: "left",
    position: "absolute",
  },
  search11Icon: {
    height: "41.67%",
    width: "6.12%",
    top: "29.17%",
    right: "86.54%",
    bottom: "29.17%",
    left: "7.34%",
    opacity: 0.4,
  },
  filter5Icon: {
    height: "54.17%",
    width: "7.95%",
    top: "22.92%",
    right: "3.36%",
    bottom: "22.92%",
    left: "88.69%",
  },
  search: {
    width: 327,
    height: 48,
  },
});

export default Search;
