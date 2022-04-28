import React, { useEffect } from 'react';
import { View, Text, Image, Dimensions, FlatList, Animated } from 'react-native';

import { shuffleArray } from '../../services/getMovies';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.95;
const imageH = imageW * 1.20;
let flat;

function Slide({ image }) {

    return (
        <View style={{width, alignItems: 'center' }}>
            <Image source={{uri: image}} style={{width: imageW, height: imageH, resizeMode:'stretch', borderRadius: 5 }} />
        </View>
    )
}

function infiniteScroll(dataList) {
const numberOfData = dataList.length;
let scrollValue = 0, scrolled = 0;

    setInterval(function () {
        scrolled++;
        if (scrolled < numberOfData) scrollValue = scrollValue + width;
        else {
        scrollValue = 0;
        scrolled = 0;
        }

        if(flat != null){
            flat.scrollToOffset({ animated: true, offset: scrollValue });
        }
    }, 5000);
}

function MainCarousel({ data }) {
    const scrollX = new Animated.Value(0);
    const newData = shuffleArray(data).slice(0, 6)

    useEffect(() => {
        if(data){
            infiniteScroll(newData)
        }
    }, [])

    return (
        <FlatList 
            data={newData}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            ref={(flatList) => {
                flat = flatList;
            }}
            scrollEventThrottle={16}
            decelerationRate={"normal"}
            renderItem={({item}) => {
                const img = `https://image.tmdb.org/t/p/original${item.poster_path}`
                return (
                    <Slide image={img} />
                )
            }}
            onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: scrollX } } }
                ], {useNativeDriver: false})}
        />
    )
}

export { MainCarousel };