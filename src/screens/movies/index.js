import React from 'react';
import { Text, Button } from 'react-native';

function MoviesPage({ navigation }) {
    return (
       <>
        <Text>movie page</Text>
        <Button
            title="home"
            onPress={() => navigation.push('home')}
        />
       </>
    )
}

export { MoviesPage };