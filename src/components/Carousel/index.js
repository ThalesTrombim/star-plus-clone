import React from 'react';
import { FlatList, View, Dimensions, Text, Image } from 'react-native';
// import {AutoScrollFlatList} from 'react-native-autoscroll-flatlist';

function TrendingCarousel({ image, title }) {
    return (
        <View style={{width,  alignItems: 'center' }}>
            <Text>{title}</Text>
            <Image source={{uri: image}} style={{width: imageW, height: imageH, resizeMode:'cover'}} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.9;
const imageH = imageW * 1.40;

function shuffleArray(inputArray){
    const newArray = inputArray.sort(()=> Math.random() - 0.5);

    return newArray;
}

function Carousel({ data }) {
    const newData = shuffleArray(data).slice(0, 6)

    return (
        <FlatList 
            data={newData}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            isAutoScrolling
            renderItem={({item}) => {
                const img = `https://image.tmdb.org/t/p/original${item.poster_path}`
                return (
                    <TrendingCarousel image={img}/>
                )
            }}
        />
    )
}

export { Carousel };