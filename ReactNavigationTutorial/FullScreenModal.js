import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state || {};

    return {
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Open Modal"
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Details Screen"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: 10,
              otherParam: 'anything you want here',
            })
          }
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    let param = JSON.stringify(navigation.getParam('itemId', 'NO ID'));
    return {
      title: `Detail ${param}`,
      headerTintColor: param === '10' ? '#000' : '#fff',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>DetailsScreen</Text>
        <Text>
          Item ID:{' '}
          {JSON.stringify(this.props.navigation.getParam('itemId', 'NO ID'))}
        </Text>
        <Text>
          Other Param:{' '}
          {JSON.stringify(
            this.props.navigation.getParam('otherParam', 'default value'),
          )}
        </Text>
        <Button
          title="Go to Details Screen Again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
    );
  }
}

class ModalScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>This is a Modal</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Close Modal"
        />
      </View>
    );
  }
}

const MainStack = createStackNavigator(
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

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

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
