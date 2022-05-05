import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MoviesPage } from './src/screens/movies';
import { Home } from './src/screens/Home';
import { SeriesPage } from './src/screens/Series';
import { Movie } from './src/screens/movie';

function Main() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <StatusBar hidden />

        <Stack.Navigator initialRouteName="movie" screenOptions={{  headerShown: false }}>
          <Stack.Screen name="movies" component={MoviesPage} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="series" component={SeriesPage} />
          <Stack.Screen name="movie" component={Movie} />
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