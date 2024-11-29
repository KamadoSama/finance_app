import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import FontSize from '@/constants/FontSize';

interface CardPhotoNameProps {
    image?: string;
    name: string;
}
const CardPhotoName:React.FC<CardPhotoNameProps> = ({image,name}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://avatar.iran.liara.run/public/27' }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

// https://avatar.iran.liara.run/public/27

export default CardPhotoName

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    name: {
        marginLeft: 10,
        fontSize:FontSize.xLarge,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    }
})