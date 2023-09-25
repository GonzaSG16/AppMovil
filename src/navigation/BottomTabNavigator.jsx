import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CartNavigator from './CartNavigator'
import OrdersNavigator from './OrdersNavigator'
import StackNavigator from "./StackNavigator"
import { StyleSheet } from 'react-native'
import { colors } from "../constants/colors"
import Feather from '@expo/vector-icons/Feather'

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return <BottomTab.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
        <BottomTab.Screen name="Inicio" component={StackNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <Feather name='home' size={24} color={focused ? '#fff' : colors.celesoscuro} />
            )
        }}
        />
        <BottomTab.Screen name="Carrito" component={CartNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <Feather name='shopping-cart' size={24} color={focused ? '#fff' : colors.celesoscuro} />
            )
        }}
        />
        <BottomTab.Screen name="CartNav" component={OrdersNavigator} options={{
            tabBarIcon: ({ focused }) => (
                <Feather name='list' size={24} color={focused ? '#fff' : colors.celesoscuro} />
            )
        }}
        />
    </BottomTab.Navigator>
}

export default BottomTabNavigator



const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.celeste,
    }
})
