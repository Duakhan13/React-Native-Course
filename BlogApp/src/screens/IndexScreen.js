import React, {useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
} from 'react-native';
import {Context} from '../context/BlogContext';
import image from '../../assets/images/delete.png';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.innerView}>
                <Text style={styles.textStyle}>
                  {item.title}-{item.id}
                </Text>
                <Pressable onPress={() => deleteBlogPost(item.id)}>
                  <Image style={styles.imageStyle} source={image} />
                </Pressable>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 18,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  imageStyle: {height: 23, width: 23},
});

export default IndexScreen;
