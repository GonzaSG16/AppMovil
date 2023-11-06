import { Settings } from '../screens'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const SettingsStack = createNativeStackNavigator()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Settings"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  )
}

export default SettingsNavigator
