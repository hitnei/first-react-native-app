import {StyleSheet, Dimensions} from 'react-native';
import {
  colorBlue,
  colorGreen,
  colorGray,
  colorRed,
  colorBlue02,
} from './../assets/colors';

const {height, width} = Dimensions.get('window'); // device height and width

const StyleCommon = StyleSheet.create({
  welcome: {
    fontWeight: '700',
    fontSize: 22,
    color: colorBlue,
    marginBottom: 8,
  },
  textEnterAccount: {
    fontSize: 15,
    color: colorGray,
    marginBottom: 32,
  },
  inputPassword: {
    width: '70%',
    marginRight: 15,
  },
  iconPassword: {
    marginRight: 0,
  },
  forgotPassword: {
    fontSize: 15,
    marginTop: 10,
    alignSelf: 'flex-end',
    color: colorBlue,
    marginBottom: 20,
  },
  buttonLogin: {
    backgroundColor: colorGreen,
  },
  continueText: {
    fontSize: 15,
    color: colorGray,
    marginVertical: 15,
  },
  buttonLoginAppleID: {
    backgroundColor: colorBlue,
    marginBottom: 10,
  },
  buttonLoginGoogle: {
    backgroundColor: colorRed,
    marginBottom: 10,
  },
  iconLoginGoogle: {
    position: 'absolute',
    left: 55,
  },
  textLoginGoogle: {
    fontWeight: '700',
  },
  buttonLoginFacebook: {
    backgroundColor: colorBlue02,
  },
  iconLoginFacebook: {
    position: 'absolute',
    width: 15,
    height: 20,
    left: 60,
  },
  textLoginFacebook: {
    fontWeight: '700',
  },
  viewSignup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  dontHaveAccText: {
    fontSize: 15,
    color: colorBlue,
    marginRight: 10,
  },
  signUpText: {
    color: colorGreen,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default StyleCommon;
