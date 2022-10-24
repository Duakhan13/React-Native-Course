import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState();
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text style={styles.input}> {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    margin: 15,
    borderWidth: 1,
    color: 'black',
  },
});

export default TextScreen;
