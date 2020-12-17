import {StyleSheet, Dimensions} from 'react-native';
import {colorBlue01, colorWhite} from './../assets/colors';

const {height, width} = Dimensions.get('window'); // device height and width

const StyleCommon = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '5%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  centerX: {
    alignItems: 'center',
  },
  centerY: {
    justifyContent: 'center',
    height: '100%',
  },
  inputView: {
    width: '100%',
    borderWidth: 1,
    borderColor: colorBlue01,
    borderRadius: 32,
    padding: 5,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
  },
  iconInput: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonBox: {
    width: '100%',
    borderRadius: 32,
    height: 56,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: colorWhite,
    fontWeight: '700',
    fontSize: 15,
  },
});

export default StyleCommon;
