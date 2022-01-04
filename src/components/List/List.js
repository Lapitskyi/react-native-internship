import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from './ListItem';

const List = ({list}) => {

  return (
    <FlatList
      data={list}
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
