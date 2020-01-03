import React from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  View,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';

function Seperator() {
  return <View style={styles.seperator} />;
}

function ButtonDemo() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press Me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Press Me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Seperator />
      <View>
        <Text>All interation for the component are disabled</Text>
        <Button
          title="Press Me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
      <Seperator />
      <View>
        <Text style={styles.title}>
          This strategy lets the title define the width of the button
        </Text>
        <View style={styles.fitToText}>
          <Button
            title="Left Button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right Button"
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fitToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonDemo;
