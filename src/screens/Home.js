import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

const Item = ({item}) => {
  const {text} = item;
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const Home = () => {
  const [val, setVal] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (val) {
      setTodo([...todo, {id: Date.now(), text: val}]);
      setVal('');
    }
  };
  const clearTodo = () => {
    setTodo([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TextInput style={styles.input} onChangeText={setVal} value={val} />

        <Button title="click" color="green" onPress={addTodo} />
        <Button title="clear" color="#000" onPress={clearTodo} />
      </View>

      <View>
        {todo.length ? (
          <FlatList
            data={todo}
            renderItem={Item}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <Text>The list is empty</Text>
        )}
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
  },

  input: {
    width: 200,
    height: '100%',
    borderColor: '#999',
    borderWidth: 1,
  },
  wrapper: {
    width: '100%',
    marginBottom: 20,
  },
  btn: {
    height: '100%',
    width: 200,
  },
});
