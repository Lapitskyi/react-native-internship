import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,

} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import constant from '../assets/constant/constant';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {constant.menu.map(item => (
        <View key={item.id}>
          <TouchableOpacity onPress={() => navigation.navigate(item.component)}>
            <Image style={styles.img} source={item.icon} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
export default Footer;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  img: {
    height: 25,
    width: 25,
  },
});
