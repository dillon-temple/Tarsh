import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Header = props => {
    return (
      <View style={styles.header}>
        <Button color='black' title="Profile" onPress={props.pageSwitch.bind(this, 'profile')}></Button>
        <Button color='black' title="Logo(Map)" onPress={props.pageSwitch.bind(this, 'map')}></Button>
        <Button color='black' title="Karma"></Button>
        <Button color='black' title="Settings" onPress={props.pageSwitch.bind(this, 'settings')}></Button>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 2,
    width: "95%",
    paddingHorizontal: 10,
    marginTop: 10,
    zIndex: 10,
  },
  karmaInfo: {
    borderColor: "black",
    borderWidth: 2,
  },
});

export default Header;