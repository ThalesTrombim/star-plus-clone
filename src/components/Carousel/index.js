import React from 'react';
import { FlatList, View, Dimensions, Text, Image } from 'react-native';
import { style } from './style';

function TrendingCarousel({ image, title }) {
    const styles = style.trending;

    return (
        <View style={{viewWidth,  alignItems: 'center', color: '#FFF', styles}}>
            <Image source={{uri: image}} style={{width: imageW, height: imageH, resizeMode:'cover', marginHorizontal: 6 }} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const viewWidth = width / 4;
const imageW = width * 0.28;
const imageH = imageW * 1.25;

function shuffleArray(inputArray){
    const newArray = inputArray.sort(()=> Math.random() - 0.5);

    return newArray;
}

function Carousel({ data }) {
    const newData = shuffleArray(data).slice(0, 6)

    return (
        <View>
            <Text style={style.carouselTitle} >Adicionados Recentemente</Text>
            <FlatList 
                data={newData}
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