import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-1.png')}
      />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: 200,
  },
});
