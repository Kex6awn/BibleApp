import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

const renderBooksGrid = (books) => (
  <View style={styles.grid}>
    {books.map((book) => (
      <TouchableOpacity key={book} style={styles.bookButton}>
        <Text style={styles.bookText}>{book}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const BibleScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.headerRow}>
      <Text style={styles.header}>Bible Here</Text>
      <TextInput style={styles.search} placeholder="Search" />
    </View>
    <Text style={styles.sectionTitle}>Old Testament</Text>
    {renderBooksGrid(oldTestamentBooks)}
    <Text style={styles.sectionTitle}>New Testament</Text>
    {renderBooksGrid(newTestamentBooks)}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { padding: 10 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  header: { fontSize: 22, fontWeight: 'bold', flex: 1 },
  search: { borderWidth: 1, borderColor: '#000', padding: 5, width: 100, borderRadius: 4 },
  sectionTitle: { fontWeight: 'bold', marginTop: 15, marginBottom: 5, fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  bookButton: {
    width: '22%', // 4 per row with some spacing
    margin: '1%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  bookText: { fontSize: 12, textAlign: 'center' }
});

export default BibleScreen;