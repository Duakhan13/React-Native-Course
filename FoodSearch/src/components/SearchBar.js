import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        source={require('../../assets/images/search.png')}
        style={{width: 22, height: 22, alignSelf: 'center'}}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="grey"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    marginVertical: 10,
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    flex: 1,
  },
});
export default SearchBar;
