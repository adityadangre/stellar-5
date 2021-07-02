import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import SpaceCraft from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true
      }}
      initialRouteName="Stellar App">

        <Stack.Screen name="Stellar App" component={HomeScreen} options={()=>{
          return({ 
            headerStyle: {
              backgroundColor: "black",
            },
            headerShown: true,
            headerTintColor: "white"
          })
        }} />
        <Stack.Screen name="Space Craft" component={SpaceCraft} options={()=>{
          return({ 
            headerStyle: {
              backgroundColor: "black",
            },
            headerShown: true,
            headerTintColor: "white"
          })
        }} />
        <Stack.Screen name="Star Map" component={StarMap} options={()=>{
          return({ 
            headerStyle: {
              backgroundColor: "black",
            },
            headerShown: true,
            headerTintColor: "white"
          })
        }} />
        <Stack.Screen name="Daily Pictures" component={DailyPic} options={()=>{
          return({ 
            headerStyle: {
              backgroundColor: "black",
            },
            headerShown: true,
            headerTintColor: "white"
          })
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
