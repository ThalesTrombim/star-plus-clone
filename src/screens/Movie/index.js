import React, { useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView, Text, Image, View } from 'react-native';
import { apiBase, apiKey} from '../../services/tmdb';
import Icon from 'react-native-vector-icons/AntDesign';

import { style } from './style';

async function getMovie(id) {
    const data = await fetch(`${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`)
    const json = await data.json();

    return json;
}

function MovieInfos() {
    return (
        <View>
            <View>
                <View>
                    <Text>
                        14
                    </Text>
                </View>
                <View>
                    <Text>
                        HD
                    </Text>
                </View>
                <View>
                    <Text>
                        CC
                    </Text>
                </View>
                <Text>
                    2021
                </Text>
                <Text>
                    2h1min
                </Text>
            </View>
            <Text>
                infos
            </Text>
        </View>
    )
}

function Movie({ navigation }) {
    const [ movie, setMovie ] = useState([])

    async function selectMovie() {
        const selectedMovie = await getMovie(500) 

        setMovie(selectedMovie)
    }

    useEffect(() => {
        selectMovie()
    }, [])

    // console.log(movie)

    const image = `https://image.tmdb.org/t/p/original${movie.poster_path}`

    console.log(image)
    return (
        <SafeAreaView style={style.movieContainer}>
            <View>
                <TouchableOpacity onPress={() => navigation.push('home')} style={style.backIcon}>
                    <Icon name='leftcircle' color={'#FFF'} size={22} />
                </TouchableOpacity>
                <Image source={{uri: image}} style={style.imgMovie}  />
            </View>
            <MovieInfos />
            <Text>{movie.original_title}</Text>
        </SafeAreaView>
    )
}

export { Movie };