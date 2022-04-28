import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, FlatList } from 'react-native';

import { shuffleArray } from '../../services/getMovies';
import { style } from './style';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.95;
const imageH = imageW * .5;

function Slide({ image, title }) {
    return (
        <View style={{width, alignItems: 'center'}}>
            <Image source={{uri: image}} style={{width: imageW, height: imageH, resizeMode:'stretch', borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
            <View style={[{width: imageW}, style.infoArea]}>
                <Text style={style.span}>Só no Star</Text>
                <Text style={style.cardTitle}>
                    { title }
                </Text>
            </View>
        </View>
    )
}

function BigCarousel({ getList, id, type}) {
    const [ list, setList ] = useState([])

    async function handleList() {
        const newData = await getList(id, type);
        setList(newData)
    }

    useEffect(() => {
        handleList()
    }, [])

    return (
        <FlatList 
            data={list}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            decelerationRate={"normal"}
            renderItem={({ item }) => {
                const img = `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                return (
                    <Slide image={img} title={item.title || item.original_name} />
                )
            }}
        />
    )
}

export { BigCarousel };