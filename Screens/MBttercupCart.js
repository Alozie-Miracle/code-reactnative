import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// import {  } from "expo-image";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MButtercupCart = () => {
  return (
    <View style={styles.mButtercupCart}>
      <View style={styles.mButtercupCartInner}>
        <View />
      </View>
      <View style={[styles.rectangleParent, styles.mPrimaryNavPosition]}>
        <View style={styles.frameChild} />
        <View style={[styles.subtotalParent, styles.mButtonPillSpaceBlock]}>
          <Text style={[styles.subtotal, styles.qtyTypo]}>Subtotal</Text>
          <Text style={[styles.text, styles.textTypo]}>$29.76</Text>
        </View>
        <View style={[styles.mButtonPill, styles.mButtonPillFlexBox]}>
          {/* <Image
            style={[styles.iconPlaceholder, styles.iconLayout]}
            source={require("../assets/icon--placeholder.svg")}
          /> */}
          <Text style={[styles.buttonLabel, styles.text1Typo]}>
            Schedule a pick-up
          </Text>
          <Text style={[styles.text1, styles.text1Typo]}>(00)</Text>
          <Image
            style={styles.iconLayout}
            source={require("../assets/Calendar.png")}
          />
        </View>
      </View>
      <Text style={styles.myCart}>My cart</Text>
      <View style={styles.basketList}>
        <View style={styles.mBasketItem}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/Image.png")}
          />
          <View style={styles.itemInfo}>
            <View style={styles.nameAndPrice}>
              <Text style={[styles.itemName, styles.textTypo]}>Hellebore</Text>
              <Text style={[styles.qty, styles.qtyTypo]}>$0.89/lb</Text>
            </View>
            <View style={[styles.mQtyStepper, styles.mButtonPillFlexBox]}>
              <View style={styles.qtySelector}>
                <Text style={styles.text2}>2</Text>
              </View>
              <View style={styles.qtySelectorParent}>
                <View style={styles.qtyLayout}>
                  <Image
                    style={styles.iconLayout}
                    source={require("../assets/Minus.png")}
                  />
                </View>
                <View style={[styles.qtySelector2, styles.qtyLayout]}>
                  <Image
                    style={styles.iconLayout}
                    source={require("../assets/Plus.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.mBasketItem1, styles.mButtonPillSpaceBlock]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/Image1.png")}
          />
          <View style={styles.itemInfo}>
            <View style={styles.nameAndPrice}>
              <Text style={[styles.itemName, styles.textTypo]}>Daisy</Text>
              <Text style={[styles.qty, styles.qtyTypo]}>$8.99/lb</Text>
            </View>
            <View style={[styles.mQtyStepper, styles.mButtonPillFlexBox]}>
              <View style={styles.qtySelector}>
                <Text style={styles.text2}>1</Text>
              </View>
              <View style={styles.qtySelectorParent}>
                <View style={styles.qtyLayout}>
                  <Image
                    style={styles.iconLayout}
                    source={require("../assets/Minus.png")}
                  />
                </View>
                <View style={[styles.qtySelector2, styles.qtyLayout]}>
                  <Image
                    style={styles.iconLayout}
                    source={require("../assets/Plus.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.mBasketItem1, styles.mButtonPillSpaceBlock]}>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/Image2.png")}
          />
          <View style={styles.itemInfo}>
            <View style={styles.nameAndPrice}>
              <Text style={[styles.itemName, styles.textTypo]}>Tulip</Text>
              <Text style={[styles.qty, styles.qtyTypo]}>$1.99/ea</Text>
            </View>
            <View style={[styles.mQtyStepper, styles.mButtonPillFlexBox]}>
              <View style={styles.qtySelector}>
                <Text style={styles.text2}>1</Text>
              </View>
              <View style={styles.qtySelectorParent}>
                <View style={styles.qtyLayout}>
                  <Image
                    style={styles.iconLayout}
                    source={require("../assets/Minus.png")}
                  />
                </View>
                <View style={[styles.qtySelector2, styles.qtyLayout]}>
                  <Image
                    style={styles.iconLayout}
                    source={require("../assets/Plus.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* this images (hamburger, wordmark, basket) has to be download and imported into the app */}
      {/* <View style={[styles.mPrimaryNav, styles.mButtonPillFlexBox]}>
        <Image
          style={styles.iconLayout}
          source={require("../assets/Hamburger.png")}
        />
        <Image
          style={styles.logoWordmark}
          source={require("../assets/Wordmark.png")}
        />
        <Image
          style={styles.iconLayout}
          source={require("../assets/Basket.png")}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mPrimaryNavPosition: {
    width: "100%",
    left: 0,
    paddingHorizontal: Padding.p_5xl,
    position: "absolute",
  },
  mButtonPillSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  qtyTypo: {
    color: Color.worldPeasCompostBase,
    fontFamily: FontFamily.desktopBodyLargeDefault,
    letterSpacing: -0.2,
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.handheldBodyLargeBold_size,
  },
  textTypo: {
    fontFamily: FontFamily.handheldBodyLargeBold,
    fontWeight: "500",
    color: Color.worldPeasCompostBase,
    lineHeight: 26,
    letterSpacing: -0.2,
    fontSize: FontSize.handheldBodyLargeBold_size,
  },
  mButtonPillFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  text1Typo: {
    color: Color.worldPeasCreminiBase,
    textAlign: "left",
    fontFamily: FontFamily.desktopBodyLargeDefault,
    letterSpacing: -0.2,
  },
  qtyLayout: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mButtercupCartInner: {
    top: 189,
    left: 188,
    position: "absolute",
  },
  frameChild: {
    height: 1,
    backgroundColor: Color.worldPeasCompostBase,
    alignSelf: "stretch",
  },
  subtotal: {
    textAlign: "left",
  },
  text: {
    textAlign: "right",
  },
  subtotalParent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconPlaceholder: {
    display: "none",
  },
  buttonLabel: {
    lineHeight: 26,
    fontSize: FontSize.handheldBodyLargeBold_size,
    color: Color.worldPeasCreminiBase,
  },
  text1: {
    fontSize: FontSize.desktopBodyLargeDefault_size,
    lineHeight: 29,
    display: "none",
  },
  mButtonPill: {
    height: 48,
    paddingVertical: Padding.p_xs,
    borderRadius: Border.br_xs,
    marginTop: 24,
    alignSelf: "stretch",
    justifyContent: "space-between",
    backgroundColor: Color.worldPeasCompostBase,
    paddingHorizontal: Padding.p_5xl,
  },
  rectangleParent: {
    bottom: 50,
    // paddingBottom: Padding.p_5xl,
    // paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.worldPeasCreminiBase,
  },
  myCart: {
    top: 72,
    left: 24,
    fontSize: 48,
    letterSpacing: -0.5,
    lineHeight: 58,
    fontFamily: FontFamily.antonRegular,
    display: "flex",
    width: 313,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    color: Color.worldPeasCompostBase,
    position: "absolute",
  },
  imageIcon: {
    width: 124,
    height: 124,
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  itemName: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  qty: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  nameAndPrice: {
    alignSelf: "stretch",
  },
  text2: {
    textAlign: "center",
    color: Color.worldPeasCompostBase,
    fontFamily: FontFamily.desktopBodyLargeDefault,
    lineHeight: 26,
    letterSpacing: -0.2,
    fontSize: FontSize.handheldBodyLargeBold_size,
    flex: 1,
  },
  qtySelector: {
    width: 58,
    height: 32,
    paddingHorizontal: Padding.p_5xs,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_base,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  qtySelector2: {
    marginLeft: 8,
  },
  qtySelectorParent: {
    marginLeft: 12,
    flexDirection: "row",
  },
  mQtyStepper: {
    overflow: "hidden",
  },
  itemInfo: {
    marginLeft: 16,
    justifyContent: "space-between",
    alignSelf: "stretch",
    flex: 1,
  },
  mBasketItem: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mBasketItem1: {
    flexDirection: "row",
  },
  basketList: {
    top: 150,
    height: "90%",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xl,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  logoWordmark: {
    width: 120,
    height: 22,
  },
  mPrimaryNav: {
    top: 20,
    height: 64,
    paddingVertical: Padding.p_sm,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    width: "100%",
    // left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  mButtercupCart: {
    borderRadius: 36,
    width: "100%",
    height: 698,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.worldPeasCreminiBase,
  },
});

export default MButtercupCart;
