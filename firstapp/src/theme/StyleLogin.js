import {StyleSheet} from 'react-native';
import {colorBlue, colorGray} from './../assets/colors';

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
  },
  iconPassword: {
    marginRight: 0,
    marginLeft: 15,
  },
  forgotPassword: {
    fontSize: 15,
    marginTop: 24,
    alignSelf: 'flex-end',
    color: colorBlue,
  },
});

export default StyleCommon;
