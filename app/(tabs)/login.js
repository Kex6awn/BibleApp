import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </Pressable>
      <Text style={styles.title}>Login Here</Text>
      {/* Add actual activity content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 60,
    textAlign: 'center',
  },
}); 