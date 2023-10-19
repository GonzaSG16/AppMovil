import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { insertSession } from '../../db';
import { setUser } from '../../features/auth/authSlice';
import styles from './Login.styles';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/authApi';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const [showEmailValidation, setShowEmailValidation] = useState(false);

  const onSubmit = () => {
    if (!email.includes('@')) {
      setShowEmailValidation(true);
      return;
    } else {
      setShowEmailValidation(false);
    }

    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        dispatch(setUser(result));
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then(result => console.log(result))
          .catch(error => console.log(error.message))
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Inicia sesión para continuar</Text>

        {showEmailValidation && (
          <Text style={styles.validationText}>
            El correo electrónico es inválido
          </Text>
        )}

        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder=" Correo electrónico"
          placeholderStyle={{ paddingLeft: 10 }}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder=" Contraseña"
          placeholderStyle={{ paddingLeft: 10 }}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Loguearse</Text>
        </Pressable>
        <Text>Aún no tienes cuenta?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: 'white' }}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;
