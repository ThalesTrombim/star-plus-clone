import React, { useEffect, useState } from 'react';
import { FlatList, View, Dimensions, Text, Image } from 'react-native';

import { style } from './style';

const { width, height } = Dimensions.get('screen');
const viewWidth = width / 4;
const imageW = width * 0.28;
const imageH = imageW * 1.25;
const widthSize = width * 0.45;
const heightSize = imageW * 1.85;

function TrendingCarousel({ image, size, sHeight }) {
    const styles = style.trending;

    return (
        <View style={{viewWidth,  alignItems: 'center', color: '#FFF', styles}}>
            <Image source={{uri: image}} style={{width: size, height: sHeight, resizeMode:'stretch', marginHorizontal: 6 }} />
        </View>
    )
}

function Carousel({ getList, title, id='', spot = false, styles, type }) {
    const [ list, setList ] = useState([]);
    const [ width, setWidth ] = useState(imageW)
    const [ height, setHeight ] = useState(imageH)

    async function handleList() {
        const newData = await getList(id, type);
        setList(newData)
    }

    useEffect(() => {
        handleList()
        if(spot == true){
            setWidth(widthSize); 
            setHeight(heightSize); 
        }
    }, [])

    return (
        <View style={styles}>
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
                        <TrendingCarousel image={img} title={'adicionados recentemente'} size={width} sHeight={height}/>
                    )
                }}
            />
        </View>
    )
}

export { Carousel };