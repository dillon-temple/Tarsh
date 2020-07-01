import React from 'react'
import {View, TextInput, StyleSheet, Button } from 'react-native';

const QuickSnapBar = props => {
    return (
      <View style={styles.quickBar}>
        <View style={styles.button}>
          <Button color="black" title="Users Near me "></Button>
        </View>
        <View style={styles.quickSnap}>
          <Button color="black" title="Quick Snap "></Button>
        </View>
        <View style={styles.button}>
          <Button color="black" title="Nodes Near me "></Button>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  quickBar: {
    flexDirection: "row",
    borderColor: "green",
    borderWidth: 2,
    width: "95%",
    justifyContent: "space-between"
  },
  button: {
    flex: 1
  },
  quickSnap: {
      flex: 2,
      margin: 10
  },
});

export default QuickSnapBar;