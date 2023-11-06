import React, { useState } from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  Alert,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { addItem } from '../../features/cart/cartSlice';
import styles from './Details.style';
import { useDispatch } from 'react-redux';

const Details = ({ route, navigation }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState('1');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const keyboardDidShow = () => {
    setKeyboardVisible(true);
  };

  const keyboardDidHide = () => {
    setKeyboardVisible(false);
  };

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: parseInt(quantity, 10) }));
    Alert.alert('Producto agregado al carrito', 'Producto agregado al carrito correctamente');
  };

  const handleAddToFavorites = () => {
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
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
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Cantidad:</Text>
          <TextInput
            style={styles.quantityInput}
            value={quantity}
            onChangeText={(text) => {
              if (text === '' || (text !== '0' && !isNaN(text))) {
                setQuantity(text);
              }
            }}
            keyboardType="numeric"
          />
        </View>
        {isKeyboardVisible ? null : (
          <View style={styles.addToCartContainer}>
            <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Añadir al carrito</Text>
            </Pressable>
          </View>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Details;
