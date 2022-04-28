import React from 'react';
import { Image, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import logo from '../../../public/images/star.png';
import { style } from './style';

const { width } = new Dimensions.get('screen');

function Nav({ navigation }) {
    const newW = width;
    
    return (
        <View style={[style.navContainer, { width: newW}]}>
            <Image source={logo} style={style.img} resizeMode="contain"/>
            <View style={style.navButtons}>
                <TouchableOpacity 
                    onPress={() => navigation.push('movies')} 
                >
                    <Text style={style.buttons}>
                        Filmes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('movies')} 
                >
                    <Text style={style.buttons}>
                        Séries
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => navigation.push('movies')} 
                >
                    <Text style={style.buttons}>
                        Espn
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { Nav };