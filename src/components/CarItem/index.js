import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

import Button from '../Button';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>
          Starting at $69,420
        </Text>
      </View>

      <Button
        type='secondary'
        content={'Custom Order'}
        onPress={() => {console.warn('Custom Order was pressed')}}
      />

      <Button
        type='primary'
        content={'Existing Inventory'}
        onPress={() => {console.warn('Existing Inventory was pressed')}}
      />
    </View>
  );
}

export default CarItem;