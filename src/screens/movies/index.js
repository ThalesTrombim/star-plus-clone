import React, { useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { style } from './style';
import { BigCarousel } from '../../components/BigCarousel';
import { getMain, getByGender, getRecent } from '../../services/getMovies';
import { Carousel } from '../../components/Carousel';

function MoviesPage({ navigation }) {

    return (
       <ScrollView style={style.moviesPageContainer}>
           <View style={style.headerMovies}>
               <View style={style.leftHeader} >
                    <TouchableOpacity onPress={() => navigation.push('home')}>
                        <Icon name='leftcircle' color={'#FFF'} size={22} />
                    </TouchableOpacity>

                    <Text style={style.title}>Filmes</Text>
               </View>

                <View style={style.rightHeader} >
                    <Text style={style.category}>Destaques</Text>
                </View>
           </View>
            <Text style={style.carouselTitle}>Filmes em destaque</Text>
            <BigCarousel  getList={getMain} id={'2'} />

            <Carousel getList={getMain} title={'Favoritos do Star+'} id={'4'} styles={{ marginTop: 14 }} />
            <Carousel getList={getRecent} title={'Novos lançamentos recentes'} styles={{ marginTop: 14 }} />
            <Carousel getList={getByGender} title={'Mistério'} id={'9648'} styles={{ marginTop: 14 }} />

       </ScrollView>
    )
}

export { MoviesPage };