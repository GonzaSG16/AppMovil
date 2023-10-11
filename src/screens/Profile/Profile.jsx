import * as ImagePicker from 'expo-image-picker'

import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCameraImage } from '../../features/auth/authSlice'
import styles from './Profile.styles'
import { usePostProfileImageMutation } from '../../services/shopApi'

const Profile = ({ navigation }) => {
  const image = useSelector(state => state.auth.imageCamera)
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispatch = useDispatch()

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      })
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        )
      }
    }
  }

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId })
  }

  return (
    <View style={styles.container}>
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
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar Foto de perfil</Text>
      </Pressable>
      <Pressable style={styles.cameraButton} onPress={confirmImage}>
        <Text>Confirmar</Text>
      </Pressable>
    </View>
  )
}

export default Profile