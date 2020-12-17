import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import StyleCommon from './../theme/StyleCommon';
import StyleLogin from './../theme/StyleLogin';
import {colorGray} from './../assets/colors';

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
            placeholderTextColor={colorGray}
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
            placeholderTextColor={colorGray}
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
        <TouchableOpacity
          style={[StyleCommon.buttonBox, StyleLogin.buttonLogin]}>
          <Text style={[StyleCommon.buttonText]}>Login</Text>
        </TouchableOpacity>
        <Text style={[StyleLogin.continueText]}>Or continue with</Text>
        <TouchableOpacity
          style={[StyleCommon.buttonBox, StyleLogin.buttonLoginAppleID]}>
          <Text style={[StyleCommon.buttonText, StyleLogin.textLoginAppleID]}>
            Apple ID
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[StyleCommon.buttonBox, StyleLogin.buttonLoginGoogle]}>
          <Image
            style={[StyleCommon.iconInput, StyleLogin.iconLoginGoogle]}
            source={require('./../assets/images/ico-google.png')}
          />
          <Text style={[StyleCommon.buttonText, StyleLogin.textLoginGoogle]}>
            Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[StyleCommon.buttonBox, StyleLogin.buttonLoginFacebook]}>
          <Image
            style={[StyleCommon.iconInput, StyleLogin.iconLoginFacebook]}
            source={require('./../assets/images/ico-facebook.png')}
          />
          <Text style={[StyleCommon.buttonText, StyleLogin.textLoginFacebook]}>
            Facebook
          </Text>
        </TouchableOpacity>
        <View style={[StyleLogin.viewSignup]}>
          <Text style={[StyleLogin.dontHaveAccText]}>
            Don’t have any account?
          </Text>
          <TouchableOpacity>
            <Text style={[StyleLogin.signUpText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
