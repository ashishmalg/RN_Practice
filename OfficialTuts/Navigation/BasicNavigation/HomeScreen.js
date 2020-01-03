import React from 'react';
import {Button} from 'react-native';

function HomeScreen({navigation}) {
  const navigationOptions = {
    title: 'Welcome',
  };

  const {navigate} = navigation;

  return (
    <Button
      title="Go to profile section"
      onPress={() => navigate('Profile', {name: 'Jane'})}
    />
  );
}

export default HomeScreen;
