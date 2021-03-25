import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  let rgbAmount;

  switch (action.type) {
    case 'change_red':
      rgbAmount = state.red + action.payload;
      return rgbAmount > 255 || rgbAmount < 0
        ? alertUser(action.colorToChange, rgbAmount, state)
        : { ...state, red: rgbAmount };
    case 'change_green':
      rgbAmount = state.green + action.payload;
      return rgbAmount > 255 || rgbAmount < 0
        ? alertUser(action.colorToChange, rgbAmount, state)
        : { ...state, green: rgbAmount };
    case 'change_blue':
      rgbAmount = state.blue + action.payload;
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
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color='Red'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
        color='Green'
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
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
