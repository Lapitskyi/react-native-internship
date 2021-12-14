import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Film = () => {
  return(
    <View>
       <Text>Item</Text>
    </View>
  )
}
export default Film;
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
