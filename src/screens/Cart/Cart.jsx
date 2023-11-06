import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import CartItem from './components/Cartitem';
import styles from './Cart.styles';
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../../services/shopApi';
import { removeItem } from '../../features/cart/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [triggerPost, result] = usePostOrderMutation();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const confirmCart = () => {
    if (cart.length === 0) {
      return;
    }

    triggerPost({ total, cart, user: 'LoggedUser' })
      .then((response) => {
        cart.forEach((item) => dispatch(removeItem(item.id)));
        alert('Compra completada. Gracias por tu pedido.');
      })
      .catch((error) => {
        console.error('Error al confirmar la compra:', error);
        alert('Error al confirmar la compra. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Carrito de Compras</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CartItem item={item} />
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
      <View>
        <View style={styles.totalTextContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPrice}>{`$${total.toFixed(2)}`}</Text>
        </View>
      </View>
      <Pressable onPress={confirmCart} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar Compra</Text>
      </Pressable>
    </View>
  );
};

export default Cart;