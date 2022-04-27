import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    navContainer: {
        alignItems: 'center',
        backgroundColor: '#0d0a14',
    },
    img: {
        width: 120,
        height: 50,
    },
    navButtons: {
        flexDirection: 'row',   
        marginVertical: 6,
        justifyContent: 'center'
    },
    buttons: {
        color: '#FFF',
        fontSize: 13,
        marginHorizontal: 14,
        textTransform: 'uppercase'
    }
})