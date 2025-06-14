import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const oldTestamentBooks = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
  "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
  "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra",
  "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
  "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations",
  "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
  "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk",
  "Zephaniah", "Haggai", "Zechariah", "Malachi"
];

const newTestamentBooks = [
  "Matthew", "Mark", "Luke", "John", "Acts",
  "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
  "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy",
  "2 Timothy", "Titus", "Philemon", "Hebrews", "James",
  "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
  "Jude", "Revelation"
];

// Helper to pad arrays to a multiple of 4
function padToMultipleOfFour(arr) {
  const remainder = arr.length % 4;
  if (remainder === 0) return arr;
  return arr.concat(Array(4 - remainder).fill(''));
}

const paddedOldTestamentBooks = padToMultipleOfFour(oldTestamentBooks);
const paddedNewTestamentBooks = padToMultipleOfFour(newTestamentBooks);

const renderBookItem = ({ item }) => {
  if (!item) {
    // Render an invisible placeholder
    return <View style={[styles.bookButton, { backgroundColor: 'transparent', borderWidth: 0 }]} />;
  }
  return (
    <TouchableOpacity style={styles.bookButton}>
      <Text style={styles.bookText}>{item}</Text>
    </TouchableOpacity>
  );
};

const BibleScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.headerRow}>
      <Text style={styles.header}>Bible Here</Text>
      <TextInput style={styles.search} placeholder="Search" />
    </View>
    <Text style={styles.sectionTitle}>Old Testament</Text>
    <FlatList
      data={paddedOldTestamentBooks}
      renderItem={renderBookItem}
      keyExtractor={(item, idx) => item ? item : `empty-${idx}`}
      numColumns={4}
      scrollEnabled={false}
      contentContainerStyle={styles.grid}
    />
    <Text style={styles.sectionTitle}>New Testament</Text>
    <FlatList
      data={paddedNewTestamentBooks}
      renderItem={renderBookItem}
      keyExtractor={(item, idx) => item ? item : `empty-${idx}`}
      numColumns={4}
      scrollEnabled={false}
      contentContainerStyle={styles.grid}
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  header: { fontSize: 22, fontWeight: 'bold', flex: 1 },
  search: { borderWidth: 1, borderColor: '#000', padding: 5, width: 100, borderRadius: 4 },
  sectionTitle: { fontWeight: 'bold', marginTop: 15, marginBottom: 5, fontSize: 16 },
  grid: { justifyContent: 'flex-start' },
  bookButton: {
    flex: 1,
    margin: 6,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff',
    minWidth: 0 // Fixes flexbox shrinking issue
  },
  bookText: { fontSize: 12, textAlign: 'center' }
});

export default BibleScreen;