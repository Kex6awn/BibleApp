import { StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
