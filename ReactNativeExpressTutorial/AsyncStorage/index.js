import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, AsyncStorage} from 'react-native';

import Input from './input';

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE';

function App() {
  const [name, setName] = useState('Hello World');

  useEffect(() => {
    async function load() {
      try {
        const text = await AsyncStorage.getItem(STORAGE_KEY);
        if (text !== null) {
          setName(text);
        }
      } catch (error) {
        console.error('Failed to load name');
      }
    }
    load();
  }, []);

  const save = async text => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, text);
      setName(text);
    } catch (error) {
      console.error('Failed to save name');
    }
  };

  return (
    <View>
      <Input
        placeholder="type your name, hit enter and refresh"
        onSubmitEditing={save}
      />

      <Text style={styles.text}>Hello {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
});

export default App;
