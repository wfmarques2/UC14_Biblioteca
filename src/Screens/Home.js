import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native-paper';

export default function Home() {
  return (
    <View style={style.container}>
      <Image style={style.imagem} source={require('../Images/logo.png')} />
      <Text style={style.text}>"A leitura é para o intelecto o que o exercício é para o corpo"</Text>
    </View>
  );
}

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },

  imagem: { 
    width: 300, 
    height: 300, 
    borderRadius: 5 },

  text: {
    margin: 15,
    fontStyle: "italic"
    

  }
});
