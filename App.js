import React, {Component} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          hidden
        />        
      </View>
    );
  }
}