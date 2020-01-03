import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

function Input({placeholder, onSubmitEditing}) {
  const [text, setText] = useState('');

  const onChangeText = value => setText(value);

  const handleSubmitEditing = () => {
    if (!text) {
      return;
    }

    onSubmitEditing(text);
    setText('');
  };

  return (
    <TextInput
      style={styles.input}
      value={text}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={handleSubmitEditing}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
  },
});

export default Input;
