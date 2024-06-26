import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import DarkModeFalseTypeDefault from "../components/DarkModeFalseTypeDefault";
import Component from "../components/Component";
import Search from "../components/Search";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Homepage = () => {
  return (
    <View style={styles.homepage}>
      <View style={styles.headlineParent}>
        <Text style={styles.headline}>otiadade@gmail.com</Text>
        <Text style={styles.headline1}>Oti Adade</Text>
      </View>
      <Text style={[styles.featuredJobs, styles.featuredJobsTypo]}>
        Featured Jobs
      </Text>
      <Text style={[styles.seeAll, styles.yearTypo]}>See all</Text>
      <View style={[styles.greenBg, styles.greenBgPosition]} />
      <Image
        style={styles.greenBgPosition}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.accraGhanaParent}>
          <Text style={[styles.accraGhana, styles.textTypo]}>Accra, Ghana</Text>
          <Text style={[styles.text, styles.textTypo]}>$180,00</Text>
        </View>
        <View style={styles.softwareEngineerParent}>
          <Text style={[styles.softwareEngineer, styles.facebookPosition]}>
            Software Engineer
          </Text>
          <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={styles.bookmark5} />
      </View>
      <Text style={styles.popularJobs}>Popular Jobs</Text>
      <Text style={styles.seeAll1}>See all</Text>
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
        textColor="#000"
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.jrExecutive, styles.fullTimeLayout]}>
          Jr Executive
        </Text>
        <Text style={[styles.burgerKing, styles.burgerKingPosition]}>
          Burger King
        </Text>
        <Text style={[styles.losAngelsUs, styles.burgerKingPosition]}>
          Los Angels, US
        </Text>
        <Text style={[styles.y, styles.yTypo]}>$96,000/y</Text>
        <Component
          productManager="Product Manager"
          beats="Beats"
          floridaUS="Florida, US"
          y="$84,000/y"
          showBeats
          showImage8Icon
          component1Width={327}
          component1Height={74}
          component1MarginTop="unset"
          productManagerFontSize={14}
          productManagerLineHeight={18}
          productManagerFontWeight="600"
          productManagerFontFamily="Poppins-SemiBold"
          floridaUSLeft="72.78%"
          yLeft="73.7%"
        />
        <Image
          style={[styles.burgerKing41Icon, styles.yPosition]}
          contentFit="cover"
          source={require("../assets/burgerking4-1.png")}
        />
      </View>
      <Search
        filter5={require("../assets/filter5.png")}
        searchPosition="absolute"
        searchTop={163}
        searchLeft={24}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse.png")}
      />
      <Image
        style={[styles.homepageChild, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-798.png")}
      />
      <Image
        style={styles.homepageItem}
        contentFit="cover"
        source={require("../assets/ellipse-767.png")}
      />
      <View style={[styles.homepageInner, styles.homepageInnerPosition]} />
      <Image
        style={styles.homepageInnerPosition}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={[styles.groupContainer, styles.homepageChildPosition]}>
        <View style={styles.texasParent}>
          <Text style={[styles.texas, styles.textTypo1]}>Texas</Text>
          <Text style={[styles.year, styles.textTypo1]}>$160,00/year</Text>
        </View>
        <View
          style={[styles.fullStackDeveloperParent, styles.groupChildPosition]}
        >
          <Text style={[styles.fullStackDeveloper, styles.googlePosition]}>
            Full-Stack Developer
          </Text>
          <Text style={[styles.google, styles.googlePosition]}>Google</Text>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
        </View>
        <View style={[styles.fullTimeWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.fullTime, styles.fullTimeLayout]}>
            Full-Time
          </Text>
        </View>
        <View style={[styles.juniorWrapper, styles.wrapperSpaceBlock]}>
          <Text style={[styles.fullTime, styles.fullTimeLayout]}>Junior</Text>
        </View>
        <Image
          style={styles.grommetIconsgoogle}
          contentFit="cover"
          source={require("../assets/grommeticonsgoogle.png")}
        />
        <Image
          style={styles.bookmark5}
          contentFit="cover"
          source={require("../assets/bookmark5.png")}
        />
      </View>
      <View style={[styles.component2Wrapper, styles.groupItemLayout]}>
        <View style={[styles.component2, styles.groupItemLayout]}>
          <View style={[styles.component2Child, styles.groupItemLayout1]} />
          <Text style={[styles.productManager, styles.beatsPosition1]}>
            Product Manager
          </Text>
          <Text style={[styles.beats, styles.beatsPosition]}>Facebook</Text>
          <Text style={[styles.floridaUs, styles.beatsPosition]}>
            Florida, US
          </Text>
          <Text style={[styles.y1, styles.y1Position]}>$86,000/y</Text>
          <Image
            style={[styles.image8Icon, styles.y1Position]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  featuredJobsTypo: {
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    fontSize: FontSize.medium16_size,
    letterSpacing: -0.2,
  },
  yearTypo: {
    fontFamily: FontFamily.circularStd,
    lineHeight: 17,
    fontSize: FontSize.regular14_size,
  },
  greenBgPosition: {
    height: 186,
    width: 280,
    top: 292,
    left: 24,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.medium16,
    letterSpacing: -0.1,
  },
  facebookPosition: {
    left: 62,
    color: Color.pureWhite,
    lineHeight: 21,
    textAlign: "left",
    position: "absolute",
  },
  googleTypo: {
    opacity: 0.75,
    top: 26,
    fontWeight: "500",
    fontSize: FontSize.regular14_size,
  },
  groupChildPosition: {
    height: 46,
    top: 0,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupItemLayout: {
    height: 74,
    width: 327,
    position: "absolute",
  },
  fullTimeLayout: {
    lineHeight: 18,
    letterSpacing: -0.1,
  },
  burgerKingPosition: {
    opacity: 0.5,
    top: 38,
    fontSize: FontSize.regular13_size,
    letterSpacing: -0.1,
    lineHeight: 21,
    color: Color.black,
    fontFamily: FontFamily.regular14,
    position: "absolute",
  },
  yTypo: {
    lineHeight: 19,
    fontSize: FontSize.medium12_size,
    textAlign: "right",
    fontFamily: FontFamily.medium16,
    fontWeight: "500",
    letterSpacing: -0.1,
    color: Color.black,
  },
  yPosition: {
    top: 16,
    position: "absolute",
  },
  homepageChildPosition: {
    left: 338,
    position: "absolute",
  },
  homepageInnerPosition: {
    left: 314,
    height: 186,
    width: 280,
    top: 292,
    position: "absolute",
  },
  textTypo1: {
    fontWeight: "500",
    color: Color.pureWhite,
    position: "absolute",
  },
  googlePosition: {
    left: 64,
    color: Color.pureWhite,
    fontFamily: FontFamily.circularStd,
    textAlign: "left",
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_46xl,
    top: 71,
    position: "absolute",
  },
  groupItemLayout1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.pureWhite,
  },
  beatsPosition1: {
    left: "25.38%",
    textAlign: "left",
  },
  beatsPosition: {
    top: "51.35%",
    opacity: 0.5,
    fontSize: FontSize.regular13_size,
    letterSpacing: -0.1,
    lineHeight: 21,
    color: Color.black,
    fontFamily: FontFamily.regular14,
    position: "absolute",
  },
  y1Position: {
    top: "21.62%",
    position: "absolute",
  },
  headline: {
    top: 31,
    fontSize: 20,
    letterSpacing: -0.3,
    textAlign: "left",
    color: Color.grey60,
    lineHeight: 24,
    fontFamily: FontFamily.regular14,
    left: 0,
    width: 254,
    position: "absolute",
  },
  headline1: {
    fontSize: FontSize.semibold24_size,
    lineHeight: 36,
    fontFamily: FontFamily.poppinsBold,
    display: "flex",
    alignItems: "center",
    color: Color.black,
    letterSpacing: -0.2,
    fontWeight: "700",
    top: 0,
    textAlign: "left",
    left: 0,
    width: 254,
    position: "absolute",
  },
  headlineParent: {
    top: 64,
    height: 55,
    width: 254,
    left: 24,
    position: "absolute",
  },
  featuredJobs: {
    lineHeight: 21,
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    fontSize: FontSize.medium16_size,
    top: 251,
    color: Color.black,
    textAlign: "left",
    left: 24,
    position: "absolute",
  },
  seeAll: {
    left: 309,
    top: 251,
    fontFamily: FontFamily.circularStd,
    textAlign: "left",
    color: Color.grey60,
    position: "absolute",
  },
  greenBg: {
    shadowColor: "rgba(83, 134, 228, 0.09)",
    shadowRadius: 35.09,
    elevation: 35.09,
    backgroundColor: Color.blue,
    borderRadius: Border.br_5xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 17.128820419311523,
    },
  },
  accraGhana: {
    left: 134,
    color: Color.pureWhite,
    fontWeight: "500",
    position: "absolute",
    fontSize: FontSize.regular15_size,
    letterSpacing: -0.1,
    lineHeight: 24,
    top: 2,
    textAlign: "left",
  },
  text: {
    textAlign: "right",
    color: Color.pureWhite,
    fontWeight: "500",
    position: "absolute",
    fontSize: FontSize.regular15_size,
    letterSpacing: -0.1,
    lineHeight: 24,
    top: 0,
    left: 0,
  },
  accraGhanaParent: {
    top: 119,
    left: 3,
    width: 236,
    height: 26,
    position: "absolute",
  },
  softwareEngineer: {
    top: 2,
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    fontSize: FontSize.medium16_size,
    letterSpacing: -0.2,
    left: 62,
  },
  facebook: {
    left: 62,
    color: Color.pureWhite,
    lineHeight: 21,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.medium16,
    letterSpacing: -0.1,
  },
  groupChild: {
    borderRadius: Border.br_xs,
    width: 46,
    backgroundColor: Color.pureWhite,
    height: 46,
  },
  softwareEngineerParent: {
    width: 207,
    height: 47,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bookmark5: {
    top: 4,
    left: 215,
    width: 19,
    height: 19,
    opacity: 0.2,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    left: 48,
    width: 239,
    height: 145,
    top: 316,
    position: "absolute",
  },
  popularJobs: {
    left: 26,
    top: 520,
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    lineHeight: 21,
    fontSize: FontSize.medium16_size,
    color: Color.black,
    letterSpacing: -0.2,
    textAlign: "left",
    position: "absolute",
  },
  seeAll1: {
    left: 291,
    fontSize: FontSize.regular13_size,
    top: 520,
    letterSpacing: -0.1,
    lineHeight: 21,
    textAlign: "left",
    color: Color.grey60,
    fontFamily: FontFamily.regular14,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.71%",
    width: "5.87%",
    top: "37.47%",
    right: "78.67%",
    bottom: "59.82%",
    left: "15.47%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.pureWhite,
    top: 0,
    left: 0,
  },
  jrExecutive: {
    left: 83,
    textAlign: "left",
    top: 16,
    position: "absolute",
    fontSize: FontSize.regular14_size,
    lineHeight: 18,
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    color: Color.black,
  },
  burgerKing: {
    left: 83,
    textAlign: "left",
  },
  losAngelsUs: {
    left: 214,
    textAlign: "right",
  },
  y: {
    left: 241,
    top: 16,
    position: "absolute",
  },
  burgerKing41Icon: {
    left: 25,
    width: 41,
    height: 43,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 561,
    height: 165,
    width: 327,
    left: 24,
    position: "absolute",
  },
  ellipseIcon: {
    top: 72,
    left: 300,
    width: 54,
    height: 54,
    position: "absolute",
  },
  homepageChild: {
    top: 76,
    width: 16,
    height: 16,
  },
  homepageItem: {
    top: 80,
    left: 342,
    width: 8,
    height: 8,
    position: "absolute",
  },
  homepageInner: {
    backgroundColor: "#04284a",
    borderRadius: Border.br_5xl,
  },
  texas: {
    left: 196,
    color: Color.pureWhite,
    fontFamily: FontFamily.circularStd,
    lineHeight: 17,
    fontSize: FontSize.regular14_size,
    top: 0,
    textAlign: "left",
  },
  year: {
    textAlign: "right",
    color: Color.pureWhite,
    fontFamily: FontFamily.circularStd,
    lineHeight: 17,
    fontSize: FontSize.regular14_size,
    top: 0,
    left: 0,
  },
  texasParent: {
    top: 121,
    width: 232,
    height: 17,
    left: 0,
    position: "absolute",
  },
  fullStackDeveloper: {
    fontSize: 17,
    lineHeight: 20,
    top: 2,
    left: 64,
    fontWeight: "700",
  },
  google: {
    opacity: 0.75,
    top: 26,
    fontWeight: "500",
    fontSize: FontSize.regular14_size,
    lineHeight: 17,
    left: 64,
  },
  fullStackDeveloperParent: {
    width: 229,
  },
  fullTime: {
    fontSize: FontSize.regular11_size,
    textAlign: "center",
    color: Color.pureWhite,
    lineHeight: 18,
    fontFamily: FontFamily.regular14,
  },
  fullTimeWrapper: {
    left: 78,
  },
  juniorWrapper: {
    left: 167,
  },
  grommetIconsgoogle: {
    top: 12,
    left: 12,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  groupContainer: {
    width: 234,
    height: 138,
    top: 316,
  },
  component2Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 17.128820419311523,
    },
    position: "absolute",
    width: "100%",
  },
  productManager: {
    top: "21.62%",
    position: "absolute",
    lineHeight: 18,
    letterSpacing: -0.1,
    fontSize: FontSize.regular14_size,
    fontFamily: FontFamily.semibold24,
    fontWeight: "600",
    color: Color.black,
  },
  beats: {
    left: "25.38%",
    textAlign: "left",
  },
  floridaUs: {
    left: "72.78%",
    textAlign: "right",
  },
  y1: {
    left: "73.7%",
    lineHeight: 19,
    fontSize: FontSize.medium12_size,
    textAlign: "right",
    fontFamily: FontFamily.medium16,
    fontWeight: "500",
    letterSpacing: -0.1,
    color: Color.black,
  },
  image8Icon: {
    height: "58.11%",
    width: "13.15%",
    right: "79.51%",
    bottom: "20.27%",
    left: "7.34%",
    display: "none",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component2: {
    top: 0,
    left: 0,
  },
  component2Wrapper: {
    top: 746,
    left: 23,
  },
  vectorIcon1: {
    height: "4.57%",
    width: "10.67%",
    top: "87.7%",
    right: "74.93%",
    bottom: "7.72%",
    left: "14.4%",
    position: "absolute",
  },
  homepage: {
    backgroundColor: Color.bG,
    flex: 1,
    height: 870,
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;
