import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MoviesPage } from './src/screens/movies';
import { Home } from './src/screens/Home';

function Main() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <View style={style.homeContainer}>
        <Nav />
        
      </View> */}
      <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="movies" component={MoviesPage} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#0d0a14',
  }
})

export default Main;