import React, {useReducer} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_Increase':
      return {...state, counter: state.counter + action.payload};

    case 'change_decrease':
      return {...state, counter: state.counter - action.payload};

    default:
      return state;
  }
};

const CounterScreen = () => {
  var a = 0;
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  console.log(state);
  return (
    <View>
      <Text style={styles.text}>Current Count: {state.counter}</Text>

      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'change_Increase', payload: 1});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'change_decrease', payload: 1});
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
export default CounterScreen;
