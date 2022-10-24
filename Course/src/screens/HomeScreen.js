import React from 'react';
import {Button, Text, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to List Screen"
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate('Text')}
      />
    </View>
  );
};

export default HomeScreen;
