import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import StyleCommon from './../theme/StyleCommon';
import StyleLogin from './../theme/StyleLogin';

class Login extends Component {
  render() {
    return (
      <View style={[StyleCommon.wrapper]}>
        <Text style={[StyleLogin.welcome]}>Welcome Back!</Text>
        <Text style={[StyleLogin.textEnterAccount]}>
          Please enter your account here
        </Text>
        <View style={[StyleCommon.inputView, {marginBottom: 15}]}>
          <Image
            style={[StyleCommon.iconInput]}
            source={require('../assets/images/ico-mail.png')}
          />
          <TextInput
            style={[StyleCommon.input]}
            placeholderTextColor="#9FA5C0"
            placeholder="Email or phone number"
          />
        </View>
        <View style={[StyleCommon.inputView]}>
          <Image
            style={[StyleCommon.iconInput]}
            source={require('../assets/images/ico-lock.png')}
          />
          <TextInput
            style={[StyleCommon.input, StyleLogin.inputPassword]}
            placeholderTextColor="#9FA5C0"
            placeholder="Password"
          />
          <TouchableOpacity>
            <Image
              style={[StyleCommon.iconInput, StyleLogin.iconPassword]}
              source={require('../assets/images/ico-eye.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={[StyleLogin.forgotPassword]}>Forgot password?</Text>
      </View>
    );
  }
}

export default Login;
