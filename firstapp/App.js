//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './src/containers/Login'

// create a component
class MyClass extends Component {
  render() {
    return (
      <View>
        <Login></Login>
      </View>
    );
  }
}

//make this component available to the app
export default MyClass;
