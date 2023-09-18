import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, Details } from "../screens";
import { Button, View } from 'react-native'
import { Header } from "../Components";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    /* header: () => (
                        <View style={{ flexDirection: 'row', marginTop: 50 }}>
                            <Button onPress={() => NavigationContainer.goBack()} title="Atrás" />
                            <Header title={route.name} />
                        </View> 
                    ), */
                })}
            >
                <Stack.Screen name='Inicio' component={Home} />
                <Stack.Screen name='Productos' component={Products} />
                <Stack.Screen name='Detalles' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator