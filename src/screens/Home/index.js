import React, { useEffect, useState } from 'react';
import { SafeAreaView, Dimensions, ScrollView} from 'react-native';
import { Carousel } from '../../components/Carousel';
import { MainCarousel } from '../../components/MainCarousel';

import { Nav } from '../../components/Nav';
import { getRecent, getMain, getByGender, getSpot } from '../../services/getMovies';
import { style } from './style';

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
                {/* <StatusBar hidden /> */}
                <Nav navigation={ navigation }/>
                <MainCarousel  data={data} />
                <Carousel getList={getMain} title={'Adicionados Recentemente'} id={'1'} />
                <Carousel getList={getSpot} title={'Filmes em Destaque'} spot={true} />
                <Carousel getList={getByGender} title={'Animações'} id={'16'} />
                <Carousel getList={getByGender} title={'Comédias'} id={'35'}/>
                <Carousel getList={getByGender} title={'Ficção Científica'} id={'878'}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export { Home };