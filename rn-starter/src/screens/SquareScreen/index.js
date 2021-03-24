import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  

  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color='Red'
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color='Green'
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color='Blue'
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
