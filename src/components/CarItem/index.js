import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';

import Button from '../Button';

const CarItem = (props) => {
  const { name, tagLine, tagLineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          {' '}
          <Text style={styles.subtitleCTA}>
            {tagLineCTA}
          </Text>
        </Text>
        
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          type='primary'
          content={'Custom Order'}
          onPress={() => {console.warn('Custom Order was pressed')}}
        />

        <Button
          type='sencodary'
          content={'Existing Inventory'}
          onPress={() => {console.warn('Existing Inventory was pressed')}}
        />
      </View>      
    </View>
  );
}

export default CarItem;