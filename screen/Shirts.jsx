// Shirts.jsx
import React from 'react';
import { Image, Text, View,IconButton } from 'react-native';

export default function Shirts({ imageSource1, icon, shirtName, shirtPrice }) {
  return (
    <View style={{ width: 130, height: 260, flexDirection: 'column' }}>
      <Image source={imageSource1} style={{ width: '100%', height: '70%', resizeMode: 'cover', borderRadius: 15 }} />
     <IconButton icon={icon} color= '#AEAEAE' size={16} style={{ position: 'absolute', top: '2%', right: '2%',backgroundColor: 'white',}}/>
     <Text style={{ color: '#767676', marginTop: 15, fontSize: 15 }}>{shirtName}</Text>
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>{shirtPrice}</Text>
    </View>
  );
}
