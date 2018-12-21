import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ...']);
import Demo from './Components/Demo'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export default class App extends Component {
  Click() {
    console.log(1234)
    // console.error('error')
    console.warn('warn')
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      debugger
      return responseJson.movies;
    })
    .catch((error) => {
      debugger
      console.error(error);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => this.Click()}>Welcome to React Native! live load success</Text>
        <Text style={styles.instructions}>To get started, edit App.js...</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Demo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
