import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DailyText from '../components/DailyText';
import DateDisplay from '../components/DateDisplay';
import PopupForm from '../components/PopupForm';

const HomeScreen = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <View style={styles.container}>
      <DateDisplay />
      <DailyText />
      <Button title="Scripture Here" onPress={() => setPopupVisible(true)} />
      <PopupForm visible={popupVisible} onClose={() => setPopupVisible(false)} />
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