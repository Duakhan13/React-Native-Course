import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Image, Pressable} from 'react-native';
import {Provider} from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import edit from './assets/images/edit.png';
import plus from './assets/images/plus.png';
import EditScreen from './src/screens/EditScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={IndexScreen}
            options={({navigation, route}) => ({
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Create')}>
                  <Image
                    source={plus}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({navigation, route}) => ({
              headerRight: () => (
                <Pressable
                  onPress={() =>
                    navigation.navigate('Edit', {id: route.params.id})
                  }>
                  <Image
                    source={edit}
                    style={{
                      height: 20,
                      width: 20,
                    }}
                  />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
