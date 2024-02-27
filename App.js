
import React from 'react';
import { View } from 'react-native';
import Quiz from './screen/Quiz.js';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Quiz />
    </View>
  );
};

export default App;