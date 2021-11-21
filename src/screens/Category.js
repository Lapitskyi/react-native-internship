import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Category = () => {
  return (
    <View>
      <Button title="Press me" onPress={() => 'Simple Button pressed'} />
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  container: {},
});
