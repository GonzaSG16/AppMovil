import { View, Text, Pressable, FlatList } from 'react-native'
import styles from './Cart.styles'
import React from 'react'
import cart from '../../data/cart'
import CartItem from './components/CartItem'

const Cart = () => {
    const renderItem = () => (
        <CartItem />
    )
    return (
        <View style={styles.container}>
            <View>
                <FlatList data={cart} keyExtractor={item => item.id} renderItem={renderItem} />
            </View>
            <View>
                <Pressable>
                    <Text>
                        Confirmar
                    </Text>
                    <View>
                        <Text>
                            {'Total $999.99'}
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart