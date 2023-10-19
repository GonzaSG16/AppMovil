import React, { useEffect, useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './SearchInput.style';
import { useNavigation } from '@react-navigation/native';

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    onSearch(value);
  }, [value]);

  const search = () => {
    onSearch(value);
  };

  const clearInput = () => {
    setValue('');
    onSearch('');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <AntDesign name="arrowleft" size={25} color={'black'} />
      </Pressable>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Buscar"
      />
      <AntDesign name="search1" size={25} color={'black'} onPress={search} style={styles.search} />
      <AntDesign
        name="closecircleo"
        size={25}
        color={'black'}
        onPress={clearInput}
        style={styles.close}
      />
    </View>
  );
};

export default SearchInput;
