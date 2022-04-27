import React, { useEffect, useState } from 'react';
import { FlatList, View, Dimensions, Text, Image } from 'react-native';

import { style } from './style';

function TrendingCarousel({ image }) {
    const styles = style.trending;

    return (
        <View style={{viewWidth,  alignItems: 'center', color: '#FFF', styles}}>
            <Image source={{uri: image}} style={{width: imageW, height: imageH, resizeMode:'stretch', marginHorizontal: 6 }} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const viewWidth = width / 4;
const imageW = width * 0.28;
const imageH = imageW * 1.25;

function Carousel({ getList, title, id='' }) {
    const [ list, setList ] = useState([]);

    async function handleList() {
        const newData = await getList(id);
        setList(newData)
    }

    useEffect(() => {
        handleList()
    }, [])

    return (
        <View>
            <Text style={style.carouselTitle} >{ title }</Text>
            <FlatList 
                data={list}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                isAutoScrolling
                renderItem={({item}) => {
                    const img = `https://image.tmdb.org/t/p/original${item.poster_path}`
                    return (
                        <TrendingCarousel image={img} title={'adicionados recentemente'}/>
                    )
                }}
            />
        </View>
    )
}

export { Carousel };