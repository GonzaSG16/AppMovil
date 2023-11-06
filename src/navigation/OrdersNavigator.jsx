import React from 'react';
import { Orders } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function OrdersNavigator() {
  useFocusEffect(
    React.useCallback(() => {

    }, [])
  );

  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
}

export default OrdersNavigator;
