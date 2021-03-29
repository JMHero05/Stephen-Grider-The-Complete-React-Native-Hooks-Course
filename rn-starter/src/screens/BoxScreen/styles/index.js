import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
  },
});
