import React from 'react';
import { View, StatusBar, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './screen/Search'; 
import Shirts from './screen/Shirts';  

export default function App() {
    const images = [
          {
            imagesource: require('./assets/photo2.jpg'),
            rank: '#1 Best Seller',
            name: 'Jeans1',
            price: '$46.00',
          },
          {
            imagesource: require('./assets/photo2.jpg'),
            rank: '#1 Best Seller',
            name: 'Jeans2',
            price: '$46.00',
          },
          {
            imagesource: require('./assets/photo2.jpg'),
            rank: '#1 Best Seller',
            name: 'Jeans3',
            price: '$46.00',
          },
        ]
        
        const image = [
          {
              imageSource1: require('./assets/T1.jpg'),
              icon: 'cards-heart-outline',
              shirtName: 'White T-shirt',
              shirtPrice: '$45',
          },
          {
              imageSource1: require('./assets/T2.jpg'),
              icon: 'cards-heart-outline',
              shirtName: 'Purple T-shirt',
              shirtPrice: '$47',
          },
          {
              imageSource1: require('./assets/T3.jpg'),
              icon: 'cards-heart-outline',
              shirtName: 'Blue Pants',
              shirtPrice: '$45',
          },
          {
              imageSource1: require('./assets/T4.jpg'),
              icon: 'cards-heart-outline',
              shirtName: 'Black Pants',
              shirtPrice: '$45',
          }
        ]
  return (
    <View style={styles.container}>
    <ScrollView>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
        <AntDesign style={{ backgroundColor: '#E3E1D9', borderRadius: 50, padding: 10 }} name='arrowleft' size={24} color={'black'} />
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Search</Text>
        <Entypo name='sound-mix' size={20} color='black' />
      </View>
      <View style={{ flexDirection: 'row', gap: 10, padding: 10, width: 330, backgroundColor: '#E3E1D9', borderRadius: 100, marginTop: 30 }}>
        <AntDesign name='search1' size={20} color='grey' />
        <TextInput style={{ flex: 1 }} placeholder='Search...'></TextInput>
        <MaterialCommunityIcons name='tune-variant' size={24} color='black' />
      </View>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, padding: 10, width: 400, marginBottom: 20 }}>
          <Text style={{ backgroundColor: '#ECB159', padding: 10, borderRadius: 20, borderEndWidth: 25, textAlign: 'center' }}>All</Text>
          <TouchableOpacity style={{ padding: 10, borderWidth: 0.5, borderRadius: 100 }}><Text>Man</Text></TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, borderWidth: 0.5, borderRadius: 100 }}><Text>Woman</Text></TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, borderWidth: 0.5, borderRadius: 100 }}><Text>Dress</Text></TouchableOpacity>
          <TouchableOpacity style={{ padding: 10, borderWidth: 0.5, borderRadius: 100 }}><Text>Baby</Text></TouchableOpacity>
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#FFFFFF', marginTop: 10, gap: 10 }}>
        {images.map((item, index) => (
          <View key={index}>
            <Search
              imagesource={item.imagesource}
              rank={item.rank}
              name={item.name}
              price={item.price}
            />
          </View>
        ))}
      </ScrollView>
      <Text style={{ marginTop: 5, marginBottom: 5, fontWeight: 'bold', fontSize: 20 }}>Product Result(43)</Text>
      <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap: 20, paddingLeft: '6%', paddingRight: '6%', marginTop: 25 }}>
        {image.map((item, index) => (
          <View key={index}>
            <Shirts
              icon={item.icon}
              shirtName={item.shirtName}
              shirtPrice={item.shirtPrice}
              imageSource1={item.imageSource1}
            />
          </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginRight: 10,
    marginLeft: 10,
  },
});
