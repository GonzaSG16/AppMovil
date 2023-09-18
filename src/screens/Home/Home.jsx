import { SafeAreaView, FlatList, View } from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../Components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'

const Home = ({ setCategorySelected, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

export default Home