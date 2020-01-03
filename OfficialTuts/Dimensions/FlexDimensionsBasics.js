import React from 'react';
import {View} from 'react-native';

function FixedDimensionsBasics() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'black'}} />
      <View style={{flex: 3, backgroundColor: 'brown'}} />
    </View>
  );
}

export default FixedDimensionsBasics;
