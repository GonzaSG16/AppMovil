import React from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { CategoryItem } from './components';
import { Header } from '../../components';
import { useGetCategoriesQuery } from '../../services/shopApi';
import styles from './Home.style';

const Home = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery();


  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <Header title={'Categorias'} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={data}
            keyExtractor={(category) => category.title}
            renderItem={({ item }) => (
              <CategoryItem
                category={item.title}
                navigation={navigation}
              />
            )}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
