import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DateDisplay = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  date: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DateDisplay; 