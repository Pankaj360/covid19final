import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens2/HomeScreen';
import GlobalScreen from '../screens2/GlobalScreen';
import ListCountries from '../screens2/ListCountries';
const Stack = createStackNavigator();

const Route = () => (
    
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{ title: 'Corona Virus' }} component={HomeScreen} />
      <Stack.Screen name="Global" options={{ title: 'World Cases' }} component={GlobalScreen} />
      <Stack.Screen
        name="Country"
        options={({ route }) => ({ title: route.params.name })}
        component={GlobalScreen}
      />
      <Stack.Screen
        name="Countries"
        options={{ title: 'Country List' }}
        component={ListCountries}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Route;
