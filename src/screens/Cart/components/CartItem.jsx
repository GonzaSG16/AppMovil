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
      <Image
        style={styles.image}
        source={{
          uri: item.images[0],
        }}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
      </View>
      <View style={styles.rightContent}>
        <Pressable onPress={handleRemoveItem} style={styles.trashIcon}>
          <Feather name="trash" size={24} color={'red'} />
        </Pressable>
        <Text style={styles.quantity}>{`Cantidad: ${item.quantity}`}</Text>
      </View>
    </View>
  );
};

export default Cartitem;