import React from 'react';
import { Image, Pressable, Text, View, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importa el ícono de AntDesign
import { addItem } from '../../features/cart/cartSlice';
import styles from './Details.style';
import { useDispatch } from 'react-redux';

const Details = ({ route, navigation }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
    Alert.alert('Producto agregado al carrito', 'Producto agregado al carrito correctamente');
  };

  const handleAddToFavorites = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigation.goBack()} style={styles.headerIcon}>
          <AntDesign name="arrowleft" size={24} />
        </Pressable>
        <Pressable onPress={handleAddToFavorites} style={styles.headerIcon}>
          <AntDesign name="hearto" size={24} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.title}>{product.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.images[0] }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.price}>{`$ ${product.price}`}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.addToCartContainer}>
        <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Details;
