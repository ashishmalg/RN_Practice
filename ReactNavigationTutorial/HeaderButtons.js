import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./ThaiCucDo.png')}
        style={{width: 30, height: 30}}
      />
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="Increase Count"
          color="#000"
        />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Count: {this.state.count}</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
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

// class DetailsScreen extends Component {
//   static navigationOptions = ({navigation}) => {
//     let param = JSON.stringify(navigation.getParam('itemId', 'NO ID'));
//     return {
//       title: `Detail ${param}`,
//       headerTintColor: param === '10' ? '#000' : '#fff',
//     };
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>DetailsScreen</Text>
//         <Text>
//           Item ID:{' '}
//           {JSON.stringify(this.props.navigation.getParam('itemId', 'NO ID'))}
//         </Text>
//         <Text>
//           Other Param:{' '}
//           {JSON.stringify(
//             this.props.navigation.getParam('otherParam', 'default value'),
//           )}
//         </Text>
//         <Button
//           title="Go to Details Screen Again"
//           onPress={() =>
//             this.props.navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })
//           }
//         />
//       </View>
//     );
//   }
// }
