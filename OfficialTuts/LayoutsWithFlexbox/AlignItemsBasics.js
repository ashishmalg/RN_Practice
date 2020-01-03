import React from 'react';
import {View} from 'react-native';

function AlignItemsBasics() {
  return (
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
      <View style={{height: 50, backgroundColor: 'red'}} />
      <View style={{height: 50, backgroundColor: 'yellow'}} />
      <View style={{height: 50, backgroundColor: 'green'}} />
    </View>
  );
}

export default AlignItemsBasics;
