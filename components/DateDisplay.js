import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DateDisplay = () => (
  <View style={styles.container}>
    <Text style={styles.date}>Date (Month, Year)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  date: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default DateDisplay; 