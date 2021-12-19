import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}><Text>Home</Text></View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },

  input: {
    width: 200,
    height: '100%',
    borderColor: '#999',
    borderWidth: 1,
  },
  wrapper: {
    width: '100%',
    marginBottom: 20,
  },
  btn: {
    height: '100%',
    width: 200,
  },
});
