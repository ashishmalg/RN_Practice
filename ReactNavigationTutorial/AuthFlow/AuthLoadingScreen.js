import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function AuthLoadingScreen({navigation}) {
  useEffect(() => {
    async function _bootstapAsync() {
      const userToken = await AsyncStorage.getItem('userToken');

      // this will switch to the App screen or Auth screen
      // and this loading screen will be unmounted and thrown away
      navigation.navigate(userToken ? 'App' : 'Auth');
    }

    _bootstapAsync();
  }, [navigation]);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;
