import React, {useState, useEffect} from 'react';
import {Animated, View, Text, Easing} from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // initial value of opacity

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      easing: Easing.back(),
      duration: 1000,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim, //Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'blue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Text fading in
        </Text>
      </FadeInView>
    </View>
  );
}

export default App;
