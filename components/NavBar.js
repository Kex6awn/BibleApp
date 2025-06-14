import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>NavBar (Navigation handled by React Navigation)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
});

export default NavBar; 