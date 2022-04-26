import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, TouchableOpacity, Text, FlatList, Image, Dimensions, Animated, ScrollView} from 'react-native';
import { Carousel } from '../../components/Carousel';
import { MainCarousel } from '../../components/MainCarousel';

import { Nav } from '../../components/Nav';
import { getRecent } from '../../services/getRecent';
import { style } from './style';

const { width, height } = Dimensions.get('screen');

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
            <ScrollView bounces={false} >
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

                <MainCarousel  data={data} />
                <Carousel data={data}/>
                <Carousel data={data}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export { Home };