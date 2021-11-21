import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './ListItem';

const DATA = [
  {id: '1', title: 'First Item'},
  {id: '2', title: 'T'},
  {id: '3', title: 'Third Item'},
  {id: '4', title: 'First Item'},
  {id: '5', title: 'T'},
  {id: '6', title: 'Third Item'},
];

const List = () => {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 10}}
      renderItem={({item}) => <ListItem item={item} />}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
    />
  );
};
export default List;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    // width: '100%',
    // flexDirection: 'column',
    // flex: 1,
  },
});
