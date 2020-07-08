import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const Header = props => {
    return (
      <View style={styles.header}>
        <MainButton
          onPress={props.pageSwitch.bind(this, "map")}
          style={styles.karmaButton}
        >
          Karma
        </MainButton>
        <MainButton
          onPress={props.pageSwitch.bind(this, "map")}
          style={styles.logoButton}
        >
          Logo(return to map)
        </MainButton>
        <View style={styles.iconContainer}>
          <MainButton onPress={props.pageSwitch.bind(this, "profile")} style={styles.iconButton}>
            <AntDesign name="profile" size={24} color="black" />
          </MainButton>
          <MainButton
            onPress={props.pageSwitch.bind(this, "settings")}
            style={{...styles.iconButton, ...styles.settingsButton}}
          >
            <AntDesign name="setting" size={36} color="black" />
          </MainButton>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: "100%",
    height: '11%',
    top: 30,
    zIndex: 10,
  },
  logoButton: {

  },
  karmaButton: {
    marginLeft: 10,
  },
  iconButton: {
    backgroundColor: null,
    flex: 1, 
  },
  settingsButton: {
    marginTop: 15,
  },
  iconContainer: {
  }

});

export default Header;