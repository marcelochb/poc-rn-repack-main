import { Federated } from '@callstack/repack/client';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, LoanCreateScreen, LoanDetailScreen, LoanListScreen } from '../screens';

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
        component={LoanListScreen}
      />
      <Stack.Screen 
        name='Loan Create Repack'
        component={LoanCreateScreen}
      />
      <Stack.Screen 
        name='Loan Detail Repack'
        component={LoanDetailScreen}
      />
    </Stack.Navigator>
  )
}