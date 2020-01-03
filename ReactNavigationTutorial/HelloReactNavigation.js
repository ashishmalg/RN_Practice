import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
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
