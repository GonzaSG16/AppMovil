import * as ImagePicker from 'expo-image-picker';
import { Image, Pressable, Text, View, ScrollView, RefreshControl, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from '../../features/auth/authSlice';
import styles from './Profile.styles';
import { usePostProfileImageMutation, useGetProfileImageQuery } from '../../services/shopApi';


const Profile = ({ navigation }) => {
  const image = useSelector((state) => state.auth.imageCamera);
  const { localId, user } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const { data, isLoading, refetch } = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      if (data?.image) {
        dispatch(setCameraImage(data?.image));
      }
    }
  }, [isLoading]);

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = async () => {
    triggerSaveProfileImage({ image: image, localId: localId }).then(result => {
      if (result.error) {
      } else {
        Alert.alert('Éxito', 'La imagen se ha guardado exitosamente', [
          { text: 'OK', onPress: () => { } },
        ]);
      }
    });
  };

  const onRefresh = async () => {
    refetch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tu Perfil</Text>
      </View>
      <ScrollView
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
      >
        <View style={styles.imageContainer}>
          {image ? (
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{
                uri: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kc7XqgCZzvq4bxKvwJMjjE1gUIJ.jpg',
              }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
        </View>
        <Pressable style={styles.cameraButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Tomar una nueva Foto de Perfil</Text>
        </Pressable>
        <Pressable style={styles.cameraButton} onPress={confirmImage}>
          <Text style={styles.buttonText}>Confirmar y Guardar</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Profile;