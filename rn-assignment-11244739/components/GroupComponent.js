import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Primary from "./Property1Primary";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonParent}>
      <Property1Primary
        buttonText="Log in"
        property1PrimaryPosition="absolute"
        property1PrimaryBorderRadius={5}
        property1PrimaryBackgroundColor="#356899"
        property1PrimaryTop={152}
        property1PrimaryLeft={1}
        property1PrimaryWidth={327}
        onPress={() => navigation.navigate("Homepage")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    height: 52,
    width: 327,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.grey70,
    fontFamily: FontFamily.medium16,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: -0.1,
    fontSize: FontSize.regular14_size,
    top: 15,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.grey70,
    borderWidth: 1,
  },
  email: {
    left: 15,
  },
  rectangleParent: {
    top: 68,
    left: 1,
    height: 52,
    width: 327,
    position: "absolute",
  },
  name: {
    left: 16,
  },
  buttonParent: {
    top: 261,
    left: 23,
    width: 328,
    height: 208,
    position: "absolute",
  },
});

export default GroupComponent;
