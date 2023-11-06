import { Image, Pressable, Text, View, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/auth/authSlice';
import { deleteSession } from '../../db';
import styles from './Settings.styles';

const Settings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth)

  const logout = () => {
    dispatch(clearUser());
    deleteSession();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Ajustes</Text>
      </View>

      <View style={styles.buttonContainer2}>
        <Text style={styles.ProfileTextBold}>Tu Información</Text>
      </View>

      <View style={styles.buttonContainer3}>
        <Text style={styles.ProfileText}>Tu correo electrónico: {user}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={logout} style={styles.LogoutButton}>
          <Text style={styles.LogoutText}>Cerrar Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Settings;
