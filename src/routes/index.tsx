import { Federated } from '@callstack/repack/client';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens';
import { Text } from 'react-native';
const LoanRepack = React.lazy(() => Federated.importModule('repackloan', './App'));

const LoanScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <LoanRepack/>
    </React.Suspense>
  );
};

const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home Repack'
        component={Home}
      />
      <Stack.Screen 
        name='Loan Repack'
        component={LoanScreen}
      />
    </Stack.Navigator>
  )
}