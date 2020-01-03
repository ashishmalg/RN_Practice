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
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 10,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    title: 'Home',
  };
};

function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Text>
        Item ID: {JSON.stringify(navigation.getParam('itemId', 'NO ID'))}
      </Text>
      <Text>
        Other Param:{' '}
        {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
      </Text>
      <Button
        title="Go to Details Screen Again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
}

DetailsScreen.navigationOptions = ({navigation}) => {
  let param = JSON.stringify(navigation.getParam('itemId', 'NO ID'));
  return {
    title: `Detail ${param}`,
    headerTintColor: param === '10' ? '#000' : '#fff',
  };
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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
