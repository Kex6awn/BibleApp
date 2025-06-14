import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DailyText = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Daily Text (Bible Verse)</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DailyText; 