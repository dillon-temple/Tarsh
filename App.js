import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';


import Header from './components/Header';
import QuickSnapBar from './components/QuickSnapBar';
import SettingsScreen from './screens/SettingsScreen';

export default function App() {

const [currentPage, setCurrentPage] = useState('map')

let content = '';


const pageSwitchHandler = (pageLocation) => {
  setCurrentPage(pageLocation);
}

if (currentPage === 'map'){
  content = <MapScreen />
} 
if (currentPage === 'profile'){
  content = <ProfileScreen />
}
if (currentPage === 'settings'){
  content = <SettingsScreen/>
}




  return (
    <View style={styles.screen}>
      <Header pageSwitch={pageSwitchHandler}/>
      {content}
      <QuickSnapBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

