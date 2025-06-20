import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Layout() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === 'index') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'bible') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'account') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="calendar" options={{ title: 'Calendar' }} />
        <Tabs.Screen name="bible" options={{ title: 'Bible' }} />
        <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            // Custom tabBarButton
            tabBarButton: (props) => (
              <View>
                <Pressable
                  onPress={() => setShowDropdown(prev => !prev)}
                  style={{ alignItems: 'center', padding: 10 }}
                >
                  <Ionicons name="person-circle-outline" size={28} color="#333" />
                </Pressable>
                {showDropdown && (
                  <View style={styles.dropdown}>
                    <Text style={styles.dropdownItem}>Edit</Text>
                    <Text style={styles.dropdownItem}>Activities</Text>
                    <Text style={styles.dropdownItem}>Logout</Text>
                  </View>
                )}
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    bottom: 40, // Adjust as needed
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 99,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
});
