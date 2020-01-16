import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {connect} from 'react-redux';

function AddTransaction() {
  return <Text>Add Transaction</Text>;
}

const HomeStack = createStackNavigator({
  HomeScreen,
  AddTransaction,
});

function Sidemenu({navigation}) {
  return (
    <View>
      <Text>Sidemenu</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}

const HomeDrawerNavigator = createDrawerNavigator(
  {
    HomeStack: HomeStack,
  },
  {
    contentComponent: Sidemenu,
    drawerWidth: 1000,
    drawerBackgroundColor: 'yellow',
    drawerPosition: 'left',
  },
);

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate('AddTransaction')}
      />
    </View>
  );
}

function StatsScreen() {
  return <Text>Stats</Text>;
}

function AccountsScreen() {
  return <Text>Accounts List</Text>;
}

const TabsNavigator = createBottomTabNavigator({
  Home: HomeDrawerNavigator, // replace with drawer navigator
  Stats: StatsScreen,
  Accounts: AccountsScreen,
});

function CreateJarsScreen({navigation}) {
  return (
    <Button title="Create Jars" onPress={() => navigation.navigate('Tabs')} />
  );
}

function IsNewUserComponent({navigation, isNewUser}) {
  if (isNewUser) {
    navigation.navigate('CreateJars');
  } else {
    navigation.navigate('Tabs');
  }
  return <Text>Checking if new user...</Text>;
}

const ConnectedIsNewUserComponent = connect(({isNewUser}) => {
  return {isNewUser};
})(IsNewUserComponent);

const NewUserCheckSwitchNavigator = createSwitchNavigator(
  {
    IsNewUser: ConnectedIsNewUserComponent,
    CreateJars: CreateJarsScreen,
    Tabs: TabsNavigator, //replace with tab navigator
  },
  {
    initialRouteName: 'IsNewUser',
  },
);

function AuthScreen({navigation}) {
  const login = () => {
    navigation.navigate('NewUserCheck');
  };
  return (
    <View>
      <Button title="Login" onPress={() => login()} />
    </View>
  );
}

function AuthLoadingScreen({navigation}) {
  navigation.navigate('Auth');
  return <Text>Authenticating...</Text>;
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthScreen,
    NewUserCheck: NewUserCheckSwitchNavigator, //switch navigator
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(AppSwitchNavigator);
