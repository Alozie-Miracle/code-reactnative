import { StyleSheet, View, Text, Image } from "react-native";

const ThirdScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/image8.png")}
          style={{ width: 435, height: 290 }}
          contentFit="cover"
        />
        <View style={styles.frame18}>
          <Text style={styles.promo}>Promo</Text>
        </View>
        <View style={styles.textPosition}>
          <View style={styles.rectangle1709}>
            <Text style={styles.buyOneGetOneFree}>Buy one get one </Text>
          </View>
          <View style={styles.rectangle1710}>
            <Text style={styles.buyOneGetOneFree}>FREE</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAE7E7",
    borderRadius: 16,
  },
  container: {
    position: "relative",
  },
  image8: {
    width: 435,
    height: 290,
    flexShrink: 0,
    borderRadius: "50%",
  },
  promo: {
    color: "#FFF",
    // fontFamily: "Sora",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  frame18: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#ED5151",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
    position: "absolute",
    top: 50,
    left: 30,
    zIndex: 1,
  },
  rectangle1709: {
    width: 200,
    height: 50,
    flexShrink: 0,
    marginVertical: 10,
    backgroundColor: "#1C1C1C",
  },
  rectangle1710: {
    width: 149,
    height: 50,
    flexShrink: 0,
    backgroundColor: "#1C1C1C",
  },
  buyOneGetOneFree: {
    width: 203,
    color: "#FFF",
    // fontFamily: "Sora",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  textPosition: {
    position: "absolute",
    zIndex: 1,
    top: 90,
    left: 30,
  },
});

export default ThirdScreen;
