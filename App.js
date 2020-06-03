import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Profile"></Button>
        <Button title="Logo"></Button>
        <View styles={styles.karmaHeader}>
          <Text>Karma: 5290</Text>
          <Text>Karma level: Silver</Text>
        </View>
      </View>
      <View style={styles.googleMap}>
        <Text>Map Div</Text>
      </View>
      <View style={styles.optionBar}>
        <Button title="Quick Snap"></Button>
        <Button title="Search Market"></Button>
        <TextInput placeholder="Search"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  karmaHeader: {
    borderColor: "black",
    borderWidth: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 2,
    width: "95%",
  },
  googleMap: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    height: "70%",
    width: "95%",
    backgroundColor: "#ccc",
  },
  optionBar: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    width: "95%"
  },
});

