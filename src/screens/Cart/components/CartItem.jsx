import { Image, Pressable, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import styles from './CartItem.styles';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../../features/cart/cartSlice';

const Cartitem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item.images[0],
          }}
        />
      </View>
      <View>
        <Text style={styles.name}>{item.title}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text>{item.quantity}</Text>
          <Text>{item.price}</Text>
        </View>
        <Pressable onPress={handleRemoveItem}>
          <Feather name="trash" size={24} color={'red'} />
        </Pressable>
      </View>
    </View>
  );
};

export default Cartitem;
