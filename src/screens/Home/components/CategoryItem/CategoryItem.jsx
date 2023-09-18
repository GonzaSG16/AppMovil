import { Pressable, Text } from 'react-native'

import { Card } from '../../../../Components'
import React from 'react'
import styles from './CategoryItem.style'

const CategoryItem = ({ category, navigation }) => {

  return (
    <Pressable onPress={() => navigation.navigate('Productos', { category })}>
      <Card style={styles.cardContainer}>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
