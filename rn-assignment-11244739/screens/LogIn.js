import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import DarkModeFalseTypeDefault from "../components/DarkModeFalseTypeDefault";
import DarkModeFalse from "../components/DarkModeFalse";
import GroupComponent from "../components/GroupComponent";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LogIn = () => {
  return (
    <View style={styles.logIn}>
      <DarkModeFalseTypeDefault
        notch={require("../assets/notch.png")}
        battery={require("../assets/battery.png")}
        wifi={require("../assets/wifi.png")}
        mobileSignal={require("../assets/mobile-signal.png")}
        darkModeFalseTypeDefaultPosition="absolute"
        darkModeFalseTypeDefaultTop={0}
        darkModeFalseTypeDefaultLeft={0}
        notchIconRight="unset"
        notchIconBottom="unset"
        notchIconOverflow="unset"
        notchIconMaxHeight="unset"
        notchIconWidth={0}
        notchIconHeight={0}
        textColor="#fff"
      />
      <DarkModeFalse
        showHomeIndicator={false}
        darkModeFalsePosition="absolute"
        darkModeFalseTop={778}
        darkModeFalseLeft={0}
        darkModeFalseWidth={375}
        homeIndicatorBackgroundColor="#0d0d26"
      />
      <DarkModeFalseTypeDefault
        notch={require("../assets/notch.png")}
        battery={require("../assets/battery1.png")}
        wifi={require("../assets/wifi1.png")}
        mobileSignal={require("../assets/mobile-signal1.png")}
        darkModeFalseTypeDefaultPosition="absolute"
        darkModeFalseTypeDefaultTop={0}
        darkModeFalseTypeDefaultLeft={0}
        notchIconRight="unset"
        notchIconBottom="unset"
        notchIconOverflow="unset"
        notchIconMaxHeight="unset"
        notchIconWidth={0}
        notchIconHeight={0}
        textColor="#0d0d26"
      />
      <Text style={[styles.haventAnAccountContainer, styles.jobizzFlexBox]}>
        <Text style={styles.haventAnAccount}>{`Haven’t an account? `}</Text>
        <Text style={styles.register}>Register</Text>
      </Text>
      <View style={[styles.headlineParent, styles.parentPosition]}>
        <Text style={[styles.headline, styles.headlinePosition]}>
          Welcome Back 👋
        </Text>
        <Text style={[styles.headline1, styles.headlinePosition]}>
          Let’s log in. Apply to jobs!
        </Text>
      </View>
      <GroupComponent />
      <View style={[styles.orContinueWithParent, styles.parentPosition]}>
        <Text style={[styles.orContinueWith, styles.jobizzFlexBox]}>
          Or continue with
        </Text>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-55.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-56.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-54.png")}
        />
      </View>
      <Text style={[styles.jobizz, styles.jobizzTypo]}>Jobizz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jobizzFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  parentPosition: {
    left: 24,
    position: "absolute",
  },
  headlinePosition: {
    textAlign: "left",
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 1,
    width: 99,
    borderTopWidth: 0.5,
    borderColor: Color.grey70,
    borderStyle: "solid",
    top: 8,
    position: "absolute",
  },
  groupLayout: {
    width: 56,
    height: 56,
    top: 0,
    position: "absolute",
  },
  jobizzTypo: {
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    letterSpacing: -0.4,
  },
  haventAnAccount: {
    color: "#bdbec2",
  },
  register: {
    color: Color.colorSteelblue,
  },
  haventAnAccountContainer: {
    top: 694,
    left: 102,
    fontFamily: FontFamily.circularStd,
    textAlign: "center",
    position: "absolute",
    fontSize: FontSize.regular14_size,
  },
  headline: {
    fontSize: FontSize.semibold24_size,
    lineHeight: 34,
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    letterSpacing: -0.4,
    top: 0,
  },
  headline1: {
    top: 41,
    letterSpacing: -0.1,
    lineHeight: 22,
    fontFamily: FontFamily.regular14,
    opacity: 0.4,
    fontSize: FontSize.regular14_size,
  },
  headlineParent: {
    top: 147,
    width: 207,
    height: 63,
  },
  orContinueWith: {
    left: 114,
    fontSize: FontSize.regular13_size,
    color: Color.grey70,
    top: 0,
    fontFamily: FontFamily.circularStd,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 229,
  },
  orContinueWithParent: {
    top: 534,
    width: 327,
    height: 16,
  },
  groupInner: {
    left: 80,
  },
  groupIcon: {
    left: 0,
  },
  groupChild1: {
    left: 160,
  },
  groupParent: {
    top: 588,
    left: 79,
    width: 216,
    height: 56,
    position: "absolute",
  },
  jobizz: {
    top: 106,
    left: -16,
    fontSize: 22,
    width: 150,
    color: Color.colorSteelblue,
    textAlign: "center",
    position: "absolute",
    fontWeight: "600",
    letterSpacing: -0.4,
  },
  logIn: {
    backgroundColor: Color.bG,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LogIn;
