import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default ColorCounter;
