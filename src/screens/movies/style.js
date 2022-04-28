import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    moviesPageContainer: {
        backgroundColor: '#0d0a14',
        flex: 1,
    },

    carouselTitle: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 40,
        marginBottom: 8,
        paddingHorizontal: 10,
    },

    title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 16
    }, 
    
    headerMovies: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8
    },

    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    
    category: {
        color: '#FFF',
        fontSize: 14,
        backgroundColor: '#5a5a5a',
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 20,

    }

    // rightHeader {

    // }
})