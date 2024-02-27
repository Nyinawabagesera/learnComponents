

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Quiz = () => {
  const [amount, setAmount] = useState('');
  const [equivalentFrancs, setEquivalentFrancs] = useState('');

  const convertIntoFrancs = () => {
    const exchangeRate = 1300;

    const francs = amount * exchangeRate;
    setEquivalentFrancs(francs.toFixed(3));
  };

  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',}}>
      <Text style={{fontSize: 16,marginBottom: 10,}}>Enter Amount in Dollars:</Text>
      <TextInput
        style={{borderWidth: 1,borderColor: '#ccc',padding: 10, marginBottom: 20,width: 200,}}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

      <Button title="Convert" onPress={convertIntoFrancs} />

      {equivalentFrancs !== '' && (
        <Text style={{marginTop: 20,fontSize: 18,}}>
          Equivalent in Rwandan Francs: {equivalentFrancs} RWF
        </Text>
      )}
    </View>
  );
};

export default Quiz;