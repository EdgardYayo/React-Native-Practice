import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar/NavBar';
import Foods from './components/Foods/Foods.jsx';

export default function App() {
  
  return (
    <View style={styles.container}>
      <NavBar/>
      <Foods/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#461b93',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


 // Strong purple #461b93
 // Light purple #8253d7
 // Orange #f78f1e