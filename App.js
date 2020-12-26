import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarItem from './src/components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <CarItem
        name={'Model X'}
        tagLine={'Order Online for '}
        tagLineCTA={'Touchless Delivery'}
        image={require('./src/assets/images/ModelX.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
