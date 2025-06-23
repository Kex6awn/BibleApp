import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const tabs = [
  { name: 'Home', route: '/', icon: 'home-outline', iconActive: 'home' },
  { name: 'Calendar', route: '/calendar', icon: 'calendar-outline', iconActive: 'calendar' },
  { name: 'Bible', route: '/bible', icon: 'book-outline', iconActive: 'book' },
];

export default function CustomTabBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  // Determine if the account icon should be active
  const isAccountActive = pathname === '/account' || showDropdown;

  // Responsive max width (match your app's main content, e.g., 600)
  const maxWidth = 600;
  const barWidth = width < maxWidth ? width : maxWidth;

  return (
    <View style={[styles.tabBar, { width: barWidth, maxWidth, marginHorizontal: 'auto' }] }>
      {tabs.map(tab => {
        const isActive = pathname === tab.route || (tab.route === '/' && (pathname === '/' || pathname === '/index'));
        return (
          <Pressable
            key={tab.name}
            onPress={() => router.push(tab.route)}
            style={styles.tab}
          >
            <Ionicons name={isActive ? tab.iconActive : tab.icon} size={28} color={isActive ? '#007AFF' : '#333'} />
            <Text style={[styles.tabLabel, isActive && { color: '#007AFF' }]}>{tab.name}</Text>
          </Pressable>
        );
      })}
      <View>
        <Pressable
          onPress={() => setShowDropdown(prev => !prev)}
          style={styles.accountTab}
        >
          <Ionicons name={isAccountActive ? 'person' : 'person-outline'} size={28} color={isAccountActive ? '#007AFF' : '#333'} />
          <Text style={[styles.tabLabel, isAccountActive && { color: '#007AFF' }]}>Account</Text>
        </Pressable>
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
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 4,
    margin: 0,
    padding: 0,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 0,
    marginVertical: 0,
    marginHorizontal: 0,
    height: 60,
  },
  accountTab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    height: 60,
  },
  tabLabel: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
    marginBottom: 0,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    bottom: 50,
    right: 0,
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