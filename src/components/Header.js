import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/netflix.png')}
      />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#333',
  },
  logo: {
    height: 25,
    width: 100,
  },
});
