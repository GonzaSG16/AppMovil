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

  const [error, setError] = useState(null);

  const onSubmit = () => {
    if (!email.includes('@')) {
      setError('El correo electrónico es inválido');
      return;
    } else {
      setError(null);
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
          .then(() => {
          })
          .catch(error => {
            setError('Correo o contraseña inválidos');
          });
      })
      .catch(error => {
        setError('Correo o contraseña inválidos');
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Inicia sesión para continuar</Text>

        {error && (
          <Text style={styles.validationText}>
            {error}
          </Text>
        )}

        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo electrónico"
          placeholderStyle={{ paddingLeft: 10 }}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Contraseña"
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
