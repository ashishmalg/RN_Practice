import React from 'react';
import {View} from 'react-native';

function FixedDimensionsBasics() {
  return (
    <View style={{flex: 1, flexDirection: 'column-reverse'}}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
    </View>
  );
}

export default FixedDimensionsBasics;
