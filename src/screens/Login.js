import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.text}>Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Login" color="#000" />
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 5,
  },
  input: {
    borderColor: '#999',
    borderWidth: 1,
  },
  wrapper: {
    width: '100%',
    marginBottom: 20,
  },
  btn: {
    marginTop: 20,
    width: 200,
  },
});
