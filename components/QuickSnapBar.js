import React from 'react'
import {View, TextInput, StyleSheet, Button } from 'react-native';

const QuickSnapBar = props => {
    return (
      <View style={styles.quickBar}>
        <Button title="Quick Snap"></Button>
        <Button title="Search Market"></Button>
        <TextInput placeholder="Search"></TextInput>
      </View>
    );
}

const styles = StyleSheet.create({
  quickBar: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    width: "95%",
  },
});

export default QuickSnapBar;