import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Button, View} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View>
        <Button
          title="Menu"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Button
          title="Go to notfications"
          onPress={() => this.props.navigation.navigate('Notifications')}
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Noftifications',
  };

  render() {
    return (
      <View>
        <Button
          title="Menu"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Button
          title="Go back home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },
  {
    drawerPosition: 'left',
    drawerWidth: 300,
    drawerBackgroundColor: 'transparent',
  },
);

export default createAppContainer(MyDrawerNavigator);
