import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to Details Screen Again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
