import React, {Component} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import realm from './realm';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'My Todo Lists',
  };

  constructor(props) {
    super(props);

    //this is the results object, which will live update
    this.todoLists = realm.objects('TodoList').sorted('creationDate');
    if (this.todoLists.length < 1) {
      realm.write(() => {
        realm.create('TodoList', {name: 'Todo List', creationDate: new Date()});
      });
    }
    this.todoLists.addListener((name, changes) => {
      console.log('changed: ' + JSON.stringify(changes));
    });
    console.log('registered listener');

    // Bind all the methods that we will be passing as props.
    this._addNewTodoList = this._addNewTodoList.bind(this);
    this._onPressTodoList = this._onPressTodoList.bind(this);

    this.state = {};
  }
  render() {
    return <View>HomeScreen</View>;
  }
}

class ItemsScreen extends Component {
  render() {
    return <View>ItemsScreen</View>;
  }
}

const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ItemsScreen: {screen: ItemsScreen},
});

export default createAppContainer(AppNavigator);
