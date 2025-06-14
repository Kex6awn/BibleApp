import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AccountMenu = () => (
  <View style={styles.menu}>
    <Text style={styles.title}>Account Menu</Text>
    <Button title="Edit Account" onPress={() => {}} />
    <Button title="Activities" onPress={() => {}} />
    <Button title="Log Out" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  menu: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AccountMenu; 