import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";

import Carousel from '../components/Carousel';

const ProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.profilePic}>
          <Image />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.realName}>Bob Newbake</Text>
          <Text style={styles.userName}>TheNewBake992</Text>
          <Button title="Add Friend!" ></Button>
        </View>
      </View>
      <Carousel />
    </View>

    // Carousel Component
  );
};

const styles = StyleSheet.create({
  screen: {
      height: "78%",
      width: '92%',
      borderColor: 'black'
  },
  container: {
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingVertical: 20,
    height: 200,
    maxHeight: "35%",
    width: "95%",
  },
  profilePic: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    height: "90%",
    width: "33%",
    backgroundColor: "#ccc",
  },
  infoContainer: {
      flex: 1,
      marginLeft: 10,
      alignItems: 'center',
  },
  realName: {
    fontSize: 25
  },
  userName: {
    fontSize: 18
  },
});

export default ProfileScreen;
