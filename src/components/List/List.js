import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
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
      columnWrapperStyle={{
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10,
      }}
      renderItem={({item}) => <ListItem item={item} />}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
      ListEmptyComponent={() => (
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            flex: 1,
          }}>
          <Text>No Data Found</Text>
        </View>
      )}
    />
  );
};
export default List;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
