import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

const ResultsDetails = ({result}) => {
  return (
    <View style={styles.constainer}>
      <Image source={{uri: result.image_url}} style={styles.imageStyle} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={{color: 'black'}}>
        {result.rating} stars, {result.review_count} reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  constainer: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default ResultsDetails;
