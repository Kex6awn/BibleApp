import { StyleSheet, Text, View } from 'react-native';

export default function EditPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      {/* Add your form or edit fields here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
