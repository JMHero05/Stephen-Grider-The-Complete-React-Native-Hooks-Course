import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase_count', payload: count + 1 });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'reduce_count', payload: count - 1 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
