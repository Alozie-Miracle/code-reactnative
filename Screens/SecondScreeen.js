import { StyleSheet, View, Text, Image } from "react-native";
// import image from "../assets/images/image.png";
// import theme from "../theme";

const LaunchScreen1 = () => {
  return (
    <View style={styles.root}>
      <View style={styles.mainBlock}>
        <View style={styles.welcomeToSizze}>
          <Text style={styles.appBuilderKeepItSimple}>
            App Builder Keep it simple
          </Text>
        </View>
        <View style={styles.blockWithLogo}>
          <Image
            // i edited the image source from having uri to require
            source={require("../assets/images/image.png")}
            style={{ width: 342, height: 344 }}
            contentFit="cover"
          />
        </View>
      </View>
      <View style={styles.buttonsWithTerms}>
        <View style={styles.welcomeToSizze2}>
          <Text
            style={
              styles.byTappingContinueIAgreeToTheTermsAndConditionsAndPrivacyPolicy
            }
          >
            By tapping ‘Continue’ I agree to the terms and conditions and
            privacy policy
          </Text>
          <View style={styles.separate}></View>
        </View>
        <View style={styles.button}>
          <View style={styles.button2}>
            <Text style={styles._Text}>Continue</Text>
          </View>
          <View style={styles.button3}>
            <Text style={styles._Text2}>Sign In</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // i adjusted the width and height here to 100%
    width: "100%",
    height: "100%",
    paddingTop: 76,
    paddingRight: 1,
    paddingBottom: 40,
    paddingLeft: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 126,
    backgroundColor: "#FFF",
  },
  appBuilderKeepItSimple: {
    alignSelf: "stretch",
    // color: theme.colors.text.main_text_color_day,
    // fontFamily: "SF Pro Display",
    fontSize: 42,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  mainBlock: {
    width: 374,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
  },
  welcomeToSizze: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    alignSelf: "stretch",
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
  image: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    borderRadius: 12,
  },
  blockWithLogo: {
    height: 344,
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
  byTappingContinueIAgreeToTheTermsAndConditionsAndPrivacyPolicy: {
    alignSelf: "stretch",
    // color: "var(--, #333)",
    textAlign: "center",
    // fontFamily: "SF Pro Display",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "normal",
  },
  buttonsWithTerms: {
    width: 374,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
  },
  welcomeToSizze2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
  separate: {
    height: 1,
    alignSelf: "stretch",
    // backgroundColor: "var(--, #CECECE)",
  },
  _Text: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "#333",
    textAlign: "center",
    // fontFeatureSettings: "'clig' off, 'liga' off",
    // fontFamily: "SF Pro Display",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    // lineHeight: "normal",
  },
  button: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 16,
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    // backgroundColor: "var(--, #EEE)",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  _Text2: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: "#F9F9F9",
    textAlign: "center",
    // fontFeatureSettings: "'clig' off, 'liga' off",
    // fontFamily: "SF Pro Display",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    // lineHeight: "normal",
  },
  button3: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: "#333",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});

export default LaunchScreen1;
