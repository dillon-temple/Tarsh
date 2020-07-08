import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Colors from "../constants/colors";


const CameraButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{ ...styles.buttonStyle, ...props.style }}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: Dimensions.get("window").width * 0.25,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: (Dimensions.get("window").width * 0.25) / 2,
    marginHorizontal: 10,
    backgroundColor: Colors.Main,
  },
});

export default CameraButton;
