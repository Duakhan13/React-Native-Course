import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({navigation}) => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/images/forest.jpg')}
        Score="8"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/images/beach.jpg')}
        Score="10"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/images/mountain.jpg')}
        Score="7"
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageScreen;
