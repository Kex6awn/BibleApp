import React from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

const PopupForm = ({ visible, onClose }) => (
  <Modal visible={visible} transparent animationType="fade">
    <View style={styles.overlay}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Popup Form</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput style={styles.input} placeholder="Type your message here!" />
        <TextInput style={styles.input} placeholder="Please fill the input" />
        <Button title="Submit" onPress={onClose} />
        <Button title="Remind me later" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginVertical: 5,
  },
});

export default PopupForm; 