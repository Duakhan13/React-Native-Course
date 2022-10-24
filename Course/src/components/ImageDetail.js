import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>Image Score is: {props.Score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
export default ImageDetail;
