import React from 'react' ;
import { View, Text,StatusBar } from 'react-native';
import { Slot } from "expo-router";

const height = StatusBar.currentHeight;

console.log(height);

const Layout = () => {
  return (
    <View style={{marginTop: height }}>
      <Slot />
      <StatusBar backgroundColor="black"/>
      <Text>Status Bar Height: {height ? height : 0}px</Text>
    </View>
  )
}

export default Layout