import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation, route}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <Text style={styles.textStyle}>{blogPost.title}</Text>
      <Text style={styles.textStyle}>{blogPost.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
});
export default ShowScreen;
