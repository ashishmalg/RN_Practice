import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';
import SignInScreen from './SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

//Implementation of HomeScreen, OtherScreen, SigninScreen, AuthLoadingScreen goes here

const AppStack = createStackNavigator({Home: HomeScreen, Other: OtherScreen});
const AuthStack = createStackNavigator({SignIn: SignInScreen});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  }),
  {
    initialRouteName: 'AuthLoading',
  },
);
