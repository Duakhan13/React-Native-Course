import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({item}) => {
          return <View style={[styles.colorView, {backgroundColor: item}]} />;
        }}
      />
    </View>
  );
};
const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({
  colorView: {
    width: 100,
    height: 100,
  },
});
export default ColorScreen;
