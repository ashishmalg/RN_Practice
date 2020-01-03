import React, {Component} from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome to the App',
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
        <Button title="show me more of the app" onPress={this._showMoreApp} />
        <Button title="Logout" onPress={this._signOut} />
      </View>
    );
  }
}

export default HomeScreen;
