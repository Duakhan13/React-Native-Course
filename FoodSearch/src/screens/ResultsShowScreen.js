import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({route, navigation}) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;
  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return (
            <Image source={{uri: item}} style={{width: 300, height: 120}} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
export default ResultsShowScreen;
