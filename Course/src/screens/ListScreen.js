import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

//list
const ListScreen = ({navigation}) => {
  const friends = [
    {name: 'Friend#1'},
    {name: 'Friend#2'},
    {name: 'Friend#3'},
    {name: 'Friend#4'},
    {name: 'Friend#5'},
    {name: 'Friend#6'},
    {name: 'Friend#7'},
    {name: 'Friend#8'},
    {name: 'Friend#9'},
    {name: 'Friend#10'},
  ];

  return (
    <View style={{flex: 1, borderWidth: 1, borderColor: 'black'}}>
      <FlatList
        data={friends}
        renderItem={({item}) => {
          return <Text style={styles.text}>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
    marginBottom: 80,
  },
});
export default ListScreen;
