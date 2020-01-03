import React, {Component} from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Please Sign In',
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View>
        <Button title="Login" onPress={this._signInAsync} />
      </View>
    );
  }
}

export default SignInScreen;
