import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = () => {
  const imageSource = {
    uri:
      "https://www.revistawelldone.cl/wp-content/uploads/2017/12/avengersinfinitywar-1494357736132_1280w.jpg"
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARD</Text>
      <Image style={styles.mainImage} source={imageSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 0,
    backgroundColor: "#F00",
    height: 200,
    width: 300
    //padding: 10,
    //borderRadius: 3
  },
  title: {
    fontSize: 30,
    padding: 5,
    backgroundColor: "#9a0007",
    textAlign: "center"
  },
  mainImage: {
    height: 190
  },
  button: {
    height: 38,
    marginTop: 10,
    backgroundColor: "#d32f2f",
    width: 140,
    alignSelf: "flex-end",
    borderRadius: 3
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 38,
    color: "#fff",
    textAlign: "center"
  },
  description: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 13,
    color: "#000"
  }
});

export default Card;
