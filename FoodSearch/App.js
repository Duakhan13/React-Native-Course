import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import {NavigationContainer} from '@react-navigation/native';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Business Search"
          initialRouteName="Search"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Results"
          initialRouteName="Results"
          component={ResultsShowScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
