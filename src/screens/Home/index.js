import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, FlatList, Image, Dimensions } from 'react-native';
import { Carousel } from '../../components/Carousel';

import { Nav } from '../../components/Nav';
import { getRecent } from '../../services/getRecent';
import { style } from './style';

const { width, height } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

function TrendingCarousel({ image, title }) {
    return (
        <View style={{width, justifyContent: 'center', alignItems: 'center', }}>
            <Text>{title}</Text>
            <Image source={{uri: image}} style={{width: imageW, height: imageH, resizeMode:'cover'}} />
        </View>
    )
}

function Home({ navigation }) {
    const [ data, setData ] = useState([])

    async function getTrending() {
        const newData = await getRecent();

        setData(newData)
    }

    useEffect(() => {
        getTrending()
    }, [])

    return (
        <SafeAreaView style={style.homeContainer}>
            <StatusBar hidden />
            <Nav />
            {/* <Button
                title="movies"
                onPress={() => navigation.push('movies')}
            /> */}
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

            {/* <FlatList 
                data={data}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                renderItem={({item}) => {
                    const img = `https://image.tmdb.org/t/p/original${item.poster_path}`
                    return (
                        <TrendingCarousel image={img}/>
                    )
                }}
            /> */}
            <Carousel data={data}/>
        </SafeAreaView>
    )
}

export { Home };