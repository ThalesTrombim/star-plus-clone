import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';

import logo from '../../../public/images/star.png';
import { style } from './style';

const { width } = new Dimensions.get('screen');

function Nav() {
    const newW = width;
    return (
        <View style={[style.navContainer, { width: newW}]}>
            <Image source={logo} style={style.img} resizeMode="contain"/>
        </View>
    )
}

export { Nav };