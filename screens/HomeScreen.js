import React from 'react';
import { StyleSheet, View } from 'react-native';
import DailyText from '../components/DailyText';
import DateDisplay from '../components/DateDisplay';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <DateDisplay />
      <DailyText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default HomeScreen; 