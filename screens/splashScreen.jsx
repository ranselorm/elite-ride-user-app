import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/fort.png")} style={styles.img} />
      </View>
      {/* <View style={styles.shape}></View> */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Your Ultimate <Text style={styles.span}>Car Rental</Text> Experience
        </Text>
        <Text style={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, id.
          Dolorum
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </Pressable>
        <Text style={styles.paragraph2}>
          Already have an account? <Text style={styles.span2}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
  },
  imageContainer: {
    // backgroundColor: "red",
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "120%",
    height: "120%",
  },
  img: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    marginRight: 40,
  },
  // shape: {
  //   backgroundColor: "blue",
  //   height: 300,
  //   width: 300,
  //   position: "absolute",
  //   top: 140,
  //   left: 20,
  //   right: 0,
  //   bottom: 0,
  //   borderRadius: 300,
  // },
  textContainer: {
    // backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  titleText: {
    // fontSize: 25,
    fontSize: RFValue(26),
    textAlign: "center",
    fontWeight: "bold",
  },
  span: {
    color: "#007FFF",
  },
  paragraph: {
    textAlign: "center",
    fontSize: RFValue(16),
    // fontSize: 18,
    marginVertical: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    width: "100%",
    backgroundColor: "#007FFF",
  },
  buttonText: {
    // fontSize: 18,
    fontSize: RFValue(16),

    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  paragraph2: {
    marginTop: 20,
    fontSize: RFValue(16),

    // color: "black",
    fontWeight: "500",
  },
  span2: {
    textDecorationLine: "underline",
    color: "#007FFF",
  },
});

export default SplashScreen;
