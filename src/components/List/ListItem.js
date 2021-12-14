import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListItem = ({item}) => {
  const {title, img} = item;
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={img} />
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
  container: {},
  wrapper: {
    width: width / 2 - 10,
    height: 250,
    borderWidth: 1,
    borderColor: '#333',
  },
});
