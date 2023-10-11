import { Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'
import styles from './Header.style'
import { useDispatch } from 'react-redux'

const Header = ({ title }) => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(clearUser())
    deleteSession()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Feather name="log-out" size={24} onPress={logout} />
    </View>
  )
}

export default Header
