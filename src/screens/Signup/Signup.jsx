import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { setUser } from '../../features/auth/authSlice';
import styles from './Signup.styles';
import { useDispatch } from 'react-redux';
import { useSignUpMutation } from '../../services/authApi';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const [showPasswordValidation, setShowPasswordValidation] = useState(false);
  const [showEmailValidation, setShowEmailValidation] = useState(false);

  const onSubmit = () => {
    if (password.length < 8) {
      setShowPasswordValidation(true);
      return;
    } else {
      setShowPasswordValidation(false);
    }

    if (!email.includes('@')) {
      setShowEmailValidation(true);
      return;
    } else {
      setShowEmailValidation(false);
    }

    if (password !== confirmPass) {
      setShowPasswordValidation(true);
      return;
    } else {
      setShowPasswordValidation(false);
    }

    //console.log(email, password, confirmPass);
    triggerSignup({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        //console.log(result);
        dispatch(setUser(result));
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.signupContainer}>
        <Text>Regístrate para continuar</Text>

        {showPasswordValidation && (
          <Text style={styles.validationText}>
            Las contraseñas deben coincidir
          </Text>
        )}

        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          placeholder=" Correo electrónico"
        />

        {showEmailValidation && (
          <Text style={styles.validationText}>
            El correo electrónico debe contener @
          </Text>
        )}

        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder=" Contraseña"
        />
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
          secureTextEntry={true}
          placeholder=" Confirmar Contraseña"
        />
        <Pressable style={styles.signupButton} onPress={onSubmit}>
          <Text style={{ color: 'white' }}>Registrarse</Text>
        </Pressable>
        <Text>¿Ya tienes una cuenta?</Text>
        <Pressable
          style={styles.signupButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ color: 'white' }}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup;
