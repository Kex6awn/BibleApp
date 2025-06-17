import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const mockDailyScripture = {
  verse: "For I know the plans I have for you,",
  reference: "Jeremiah 29:11",
  fullText: `For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future.`
};

const DailyText = () => (
  <View style={styles.container}>
    <Text style={styles.verse}>{mockDailyScripture.verse}</Text>
    <Text style={styles.reference}>{mockDailyScripture.reference}</Text>
    <Text style={styles.fullText}>{mockDailyScripture.fullText}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  verse: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#444',
    textAlign: 'center',
  },
  reference: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
  fullText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'center',
  },
});

export default DailyText; 