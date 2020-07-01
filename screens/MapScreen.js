import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const MapScreen = props => {
    return (
      <View style={styles.googleMap}>
        <Text>Map Div</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  googleMap: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    height: "78%",
    width: "95%",
    backgroundColor: "#ccc",
  },
});

export default MapScreen;