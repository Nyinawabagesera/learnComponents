// Search.jsx
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Search({ imagesource, rank, name, price }) {
  return (
    <View style={{ backgroundColor: '#FFFFFF', height: 150, width: 200, position: 'relative' }}>
      <Image source={imagesource} style={{ width: '90%', height: '100%', borderRadius: 20 }} />
      <View style={{ position: 'absolute', top: '8%', left: '6%' }}>
        <Text style={{ backgroundColor: '#C69A5C', paddingVertical: 3, paddingHorizontal: 10, borderRadius: 20, color: 'white' }}>{rank}</Text>
      </View>
      <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.5)', bottom: 0, left: 0, width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '25%', alignItems: 'center', paddingHorizontal: '5%', borderBottomEndRadius: 20, borderBottomLeftRadius: 20 }}>
        <Text style={{ color: '#E1D2C3' }}>{name}</Text>
        <Text style={{ color: '#E1D2C3' }}>{price}</Text>
      </View>
    </View>
  );
}