import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import useInput from '../useHook/useInput';
import CheckBox from '@react-native-community/checkbox';

export const Search = () => {
  const {search, setSearch} = useInput('');
  const [films, setFilms] = useState(false);
  const [serials, setSerials] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setSearch} value={search} />
      <View style={styles.checkBoxContainer}>
        <View style={styles.checkBoxWrapper}>
          <CheckBox disabled={false} value={films} onValueChange={setFilms} />
          <Text>Films</Text>
        </View>
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            disabled={false}
            value={serials}
            onValueChange={setSerials}
          />
          <Text>Serials</Text>
        </View>
      </View>

      <View style={styles.btn}>
        <Button title="Search" color="#000" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    borderColor: '#999',
    borderRadius: 12,
    borderWidth: 1,
  },

  btn: {

    marginTop: 20,
    width: 200,
  },
});
