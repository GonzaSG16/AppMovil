import { SafeAreaView, FlatList, View } from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../Components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'
import Counter from '../../Components/Counter'

const Home = ({ setCategorySelected, navigation }) => {
  return (
    <View style={styles.container}>
      <Counter />
      <Header title={'Categories'} />
      <View style={styles.container}>
        <FlatList
          data={dataCategories}
          keyExtractor={category => category}
          renderItem={({ item }) => (
            <CategoryItem
              category={item}
              navigation={navigation}
            />
          )}
        />
      </View>
    </View>
  )
}

export default Home