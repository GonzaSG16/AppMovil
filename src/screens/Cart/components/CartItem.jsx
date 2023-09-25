import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import styles from './CartItem.styles'

const CartItem = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>Nombre</Text>
            </View>
            <View style={styles.details}>
                <View>
                    <Text>Cantidad</Text>
                    <Text>Precio</Text>
                </View>
                <Pressable>
                    <Feather name="trash" size={24} color={"red"} />
                </Pressable>
            </View>
        </View>
    )
}

export default CartItem