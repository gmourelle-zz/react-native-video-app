import React from "react";

import PropTypes from "prop-types";

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Linking
} from "react-native";

const Card = ({ title, image, description, url }) => {
  const imageSource = {
    uri: image
  };

  const onPressButton = () => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.mainImage} source={imageSource} />
      <Text sytle={styles.description}>{description}</Text>
      <TouchableHighlight
        underlayColor="#ff6659"
        onPress={onPressButton}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ver mas</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    height: 500,
    width: 300,
    padding: 10,
    borderRadius: 3
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default Card;
