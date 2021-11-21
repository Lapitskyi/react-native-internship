import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

const ListItem = ({item}) => {
  const {title, img} = item;
  return (
    <View style={styles.wrapper}>
      <Image source={img} />
      <Text>{title}</Text>
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
