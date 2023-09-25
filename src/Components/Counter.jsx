import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
    //const counter = 0
    const [inputToAdd, setInputToAdd] = useState(0)
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.counterContainer}>
                <Pressable style={styles.counterButtons} onPress={() => dispatch(decrement())}>
                    <Text style={styles.signs}>-</Text>
                </Pressable>
                <Text style={styles.signs}>{counter}</Text>
                <Pressable style={styles.counterButtons} onPress={() => dispatch(increment())}>
                    <Text style={styles.signs}>+</Text>
                </Pressable>
            </View>
            <View style={styles.inputContaienr}>
                <TextInput
                    keyboardType="number-pad"
                    style={styles.input}
                    placeholder="cantidad a sumar"
                    value={inputToAdd}
                    onChangeText={value => setInputToAdd(Number(value))}
                />
                <Pressable onPress={() => dispatch(incrementByAmount(inputToAdd))}>
                    <Text>AÑADIR</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Counter

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginTop: 35,
    },
    counterContainer: {
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'space-between',
        height: 50,
    },
    counterButtons: {
        backgroundColor: 'blue',
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signs: {
        fontSize: 35,
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        height: 30,
    },
    inputContaienr: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
    },
})