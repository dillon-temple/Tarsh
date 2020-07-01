import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Header = props => {
    return (
      <View style={styles.header}>
        <Button title="Profile" onPress={props.pageSwitch.bind(this, 'profile')}></Button>
        <Button title="Logo" onPress={props.pageSwitch.bind(this, 'map')}></Button>
        <View styles={styles.karmaInfo}>
          <Text>Karma: 5290</Text>
          <Text>Karma level: Silver</Text>
        </View>
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
  },
  karmaInfo: {
    borderColor: "black",
    borderWidth: 2,
  },
});

export default Header;