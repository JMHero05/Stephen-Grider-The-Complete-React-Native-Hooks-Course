import React, { useReducer } from 'react';
import { View, Text, Button } from 'react-native';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'increase_count':
      return { ...state, count: state.count + payload };
    case 'decrease_count':
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          dispatch({ type: 'increase_count', payload: 1 });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          dispatch({ type: 'decrease_count', payload: 1 });
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
