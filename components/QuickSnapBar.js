import React from 'react'
import {View, TextInput, StyleSheet, Button } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import CameraButton from './CameraButton';
import Colors from '../constants/colors';
import MainButton from './MainButton';

const QuickSnapBar = props => {
    return (
      <View style={styles.quickBar}>
        <View style={styles.button}>
          <MainButton>Users Nearby</MainButton>
        </View>
          <CameraButton onPress={() => {}} style={styles.cameraButton}>
            <AntDesign name="camerao" size={40} color="black" />
          </CameraButton>
        <View style={styles.button}>
          <MainButton>Nodes Nearby</MainButton>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  quickBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: "10%",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraButton: {
    flex: 2,
  }
});

export default QuickSnapBar;