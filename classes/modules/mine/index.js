'use strict'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTabItem: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
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
});
