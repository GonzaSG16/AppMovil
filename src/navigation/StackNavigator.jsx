import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, Details } from "../screens";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigator }) => ({
                headerShown: false,
                /* header: () => (
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <Button onPress={() => NavigationContainer.goBack()} title="Atrás" />
                        <Header title={route.name} />
                    </View> 
                ), */
            })}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Productos' component={Products} />
            <Stack.Screen name='Detalles' component={Details} />
        </Stack.Navigator>
    )
}

export default StackNavigator