import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = validColor(red, setRed, green, setGreen, blue, setBlue);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', COLOR_INCREMENT * -1)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', COLOR_INCREMENT * -1)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', COLOR_INCREMENT * -1)}
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

function validColor(red, setRed, green, setGreen, blue, setBlue) {
  return (color, change) => {
    const tooMuch = `This color can't handle anymore ${color} Broseph!`;
    const tooLittle = `Whoooooa. What do you have against ${color}? Add ${color}, my friend, not take.`;

    if (color === 'red') {
      if (red + change > 255) {
        alert(tooMuch);
      } else if (red + change < 0) {
        alert(tooLittle);
      } else {
        setRed(red + change);
      }
    } else if (color === 'green') {
      if (green + change > 255) {
        alert(tooMuch);
      } else if (green + change < 0) {
        alert(tooLittle);
      } else {
        setGreen(green + change);
      }
    } else {
      if (blue + change > 255) {
        alert(tooMuch);
      } else if (blue + change < 0) {
        alert(tooLittle);
      } else {
        setBlue(blue + change);
      }
    }
  };
}
