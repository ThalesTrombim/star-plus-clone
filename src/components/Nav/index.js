import React from 'react';
import { Image, Text, View } from 'react-native';

import logo from '../../../public/images/star.png';
import { style } from './style';

function Nav() {
    return (
        <View style={style.navContainer}>
            <Image source={logo} style={style.img} resizeMode="contain"/>
        </View>
    )
}

export { Nav };