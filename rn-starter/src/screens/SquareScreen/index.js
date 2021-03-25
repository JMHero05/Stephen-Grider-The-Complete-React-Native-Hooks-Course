import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  let rgbAmount;

  switch (action.colorToChange) {
    case 'red':
      rgbAmount = state.red + action.amount;
      return rgbAmount > 255 || rgbAmount < 0
        ? alertUser(action.colorToChange, rgbAmount, state)
        : { ...state, red: rgbAmount };
    case 'green':
      rgbAmount = state.green + action.amount;
      return rgbAmount > 255 || rgbAmount < 0
        ? alertUser(action.colorToChange, rgbAmount, state)
        : { ...state, green: rgbAmount };
    case 'blue':
      rgbAmount = state.blue + action.amount;
      return rgbAmount > 255 || rgbAmount < 0
        ? alertUser(action.colorToChange, rgbAmount, state)
        : { ...state, blue: rgbAmount };
    default:
      return state;
  }
};

// FUNCTION TO ALERT THE USER IF INCREMENTING CREATES INVALID RGB

const alertUser = (color, colorSum, state) => {
  const tooMuch = `This color can't handle anymore ${color} Broseph`;
  const tooLittle = `Whoooooa. What do you have against ${color}? Add ${color}, my friend, not take.`;

  switch (color) {
    case 'red':
      colorSum > 255 ? alert(tooMuch) : alert(tooLittle);
      return state;
    case 'green':
      colorSum > 255 ? alert(tooMuch) : alert(tooLittle);
      return state;
    case 'blue':
      colorSum > 255 ? alert(tooMuch) : alert(tooLittle);
      return state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
        color='Red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
        color='Green'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
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
