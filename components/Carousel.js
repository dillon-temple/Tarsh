import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constants/colors';

const Carousel = props => {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Recent Postings</Text>
        <View style={styles.carousel}>
            <Text>Carousel Placeholder</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "60%",
        borderColor: 'black',
        borderWidth: 2,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 25,
        textDecorationLine: 'underline',
        textDecorationColor: 'black'
    },
    carousel: {
        backgroundColor: Colors.Main,
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Carousel