import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, RefreshControl } from 'react-native';
import { useGetOrdersQuery } from '../../services/shopApi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import styles from './Orders.styles';

const Stack = createNativeStackNavigator();

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { data, isLoading, refetch } = useGetOrdersQuery();

  const onRefresh = () => {
    refetch();
  };

  useEffect(() => {
    if (data) {
      const getOrders = Object.keys(data).map((key) => data[key]);
      setOrders(getOrders);
    }
  }, [data]);

  const RenderItemOrders = ({ item }) => {
    const { images, price, title, quantity } = item.cart[0];

    return (
      <View style={styles.listContent}>
        <Image style={styles.img} source={{ uri: images[0] }} />
        <View style={styles.itemDetails}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.quantity}>{`Cantidad: ${quantity}`}</Text>
        </View>
        <Text style={styles.price}>{`$${price * quantity}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Mis Compras</Text>
      </View>
      <FlatList
        data={orders}
        renderItem={({ item, index }) => <RenderItemOrders item={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const OrdersNavigator = () => {
  useFocusEffect(
    React.useCallback(() => {
    }, [])
  );

  return (
    <Stack.Navigator
      initialRouteName="OrdersScreen"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="OrdersScreen" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
