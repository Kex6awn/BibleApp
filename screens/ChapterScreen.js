import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Mapping of book names to chapter counts
const chapterCounts = {
  'Genesis': 50, 'Exodus': 40, 'Leviticus': 27, 'Numbers': 36, 'Deuteronomy': 34,
  'Joshua': 24, 'Judges': 21, 'Ruth': 4, '1 Samuel': 31, '2 Samuel': 24,
  '1 Kings': 22, '2 Kings': 25, '1 Chronicles': 29, '2 Chronicles': 36, 'Ezra': 10,
  'Nehemiah': 13, 'Esther': 10, 'Job': 42, 'Psalms': 150, 'Proverbs': 31,
  'Ecclesiastes': 12, 'Song of Solomon': 8, 'Isaiah': 66, 'Jeremiah': 52, 'Lamentations': 5,
  'Ezekiel': 48, 'Daniel': 12, 'Hosea': 14, 'Joel': 3, 'Amos': 9,
  'Obadiah': 1, 'Jonah': 4, 'Micah': 7, 'Nahum': 3, 'Habakkuk': 3,
  'Zephaniah': 3, 'Haggai': 2, 'Zechariah': 14, 'Malachi': 4,
  'Matthew': 28, 'Mark': 16, 'Luke': 24, 'John': 21, 'Acts': 28,
  'Romans': 16, '1 Corinthians': 16, '2 Corinthians': 13, 'Galatians': 6, 'Ephesians': 6,
  'Philippians': 4, 'Colossians': 4, '1 Thessalonians': 5, '2 Thessalonians': 3, '1 Timothy': 6,
  '2 Timothy': 4, 'Titus': 3, 'Philemon': 1, 'Hebrews': 13, 'James': 5,
  '1 Peter': 5, '2 Peter': 3, '1 John': 5, '2 John': 1, '3 John': 1,
  'Jude': 1, 'Revelation': 22
};

function padToMultipleOfFour(arr) {
  const remainder = arr.length % 4;
  if (remainder === 0) return arr;
  return arr.concat(Array(4 - remainder).fill(null));
}

const ChapterScreen = () => {
  const { book } = useLocalSearchParams();
  const router = useRouter();
  const chapters = Array.from({ length: chapterCounts[book] }, (_, i) => i + 1);
  const paddedChapters = padToMultipleOfFour(chapters);

  const renderChapterItem = ({ item }) => {
    if (!item) {
      return <View style={[styles.chapterButton, { backgroundColor: 'transparent', borderWidth: 0 }]} />;
    }
    return (
      <TouchableOpacity style={styles.chapterButton}>
        <Text style={styles.chapterText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/bible')} style={styles.backButton}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </Pressable>
      <Text style={styles.header}>{book} - Select Chapter</Text>
      <FlatList
        data={paddedChapters}
        renderItem={renderChapterItem}
        keyExtractor={(item, idx) => item ? item.toString() : `empty-${idx}`}
        numColumns={4}
        scrollEnabled={true}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 18,
    color: '#007AFF',
  },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', marginTop: 60 },
  grid: { justifyContent: 'flex-start' },
  chapterButton: {
    flex: 1,
    margin: 6,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
    minWidth: 0
  },
  chapterText: { fontSize: 14, textAlign: 'center' }
});

export default ChapterScreen; 