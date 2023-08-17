import { Federated } from '@callstack/repack/client';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, LoanApp } from '../screens';

const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home Repack'
        component={Home}
      />
      <Stack.Screen 
        name='Loan List Repack'
        component={LoanApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}