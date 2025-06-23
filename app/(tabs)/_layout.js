import { Ionicons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Layout() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Tabs */}
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === 'index') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'calendar') iconName = focused ? 'calendar' : 'calendar-outline';
            else if (route.name === 'bible') iconName = focused ? 'book' : 'book-outline';
            else if (route.name === 'account') iconName = focused ? 'person' : 'person-outline';
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
            tabBarButton: () => (
              <Pressable
                onPress={() => setShowDropdown(prev => !prev)}
                style={{ alignItems: 'center', padding: 10 }}
              >
                <Ionicons name="person-circle-outline" size={28} color="#333" />
              </Pressable>
            ),
          }}
        />
      </Tabs>

      {/* Dropdown Menu */}
      {showDropdown && (
        <View style={styles.dropdown}>
          <Pressable onPress={() => { setShowDropdown(false); router.push('/edit'); }}>
            <Text style={styles.dropdownItem}>Edit</Text>
          </Pressable>
          <Pressable onPress={() => { setShowDropdown(false); router.push('/activities'); }}>
            <Text style={styles.dropdownItem}>Activities</Text>
          </Pressable>
          <Pressable onPress={() => { setShowDropdown(false); router.push('/login'); }}>
            <Text style={styles.dropdownItem}>Login</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    bottom: 70, // Place above the tab bar
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 99,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
});
