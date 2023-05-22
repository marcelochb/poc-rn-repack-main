import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens';
const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home Repack'
        component={Home}
      />
    </Stack.Navigator>
  )
}