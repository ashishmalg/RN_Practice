import React from 'react';
import {View} from 'react-native';

function FixedDimensionsBasics() {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'black'}} />
      <View style={{width: 150, height: 150, backgroundColor: 'brown'}} />
    </View>
  );
}

export default FixedDimensionsBasics;
