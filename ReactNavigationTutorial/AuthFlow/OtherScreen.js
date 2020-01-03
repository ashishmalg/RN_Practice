import React, {Component} from 'react';
import {View, Text} from 'react-native';

class OtherScreen extends Component {
  static navigationOptions = {
    title: 'Other Screen',
  };

  render() {
    return (
      <View>
        <Text>Other Screen</Text>
      </View>
    );
  }
}

export default OtherScreen;
