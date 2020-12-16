import {StyleSheet} from 'react-native';
import {colorBlue01} from './../assets/colors';

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
});

export default StyleCommon;
